import { UserDAO } from "../model/UserDAO.js";
import { Database } from "../model/Database.js";
import generateToken from "../model/service/generateToken.js";

const db = new Database();
const userDAO = new UserDAO(db);

const checkParam = (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(401).json({
      message: "email and password are required",
    });
    return false;
  }
  return true;
};

const register = (req, res) => {
  if (!checkParam(req, res)) return;

  const { firstname, lastname, address, phone, email, password } = req.body;
  userDAO
    .create(firstname, lastname, address, phone, email, password)
    .then(() => {
      res.status(201).json({ message: "User created successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Failed to register user" });
    });
};

const login = (req, res) => {
  if (!checkParam(req, res)) return;

  const { email, password } = req.body;
  userDAO
    .login(email, password)
    .then(({ isAuthentificated, user }) => {
      if (!isAuthentificated) {
        return res.status(401).json({ message: "invalid to login" });
      }
      return res.status(201).json({
        user,
        message: "Authentification successful",
        token: generateToken(user),
      });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ message: "Failed to login" });
    });
};

const logout = (req, res) => {
  res.clearCookie("user").sendStatus(200);
};

const info = (req, res) => {
  userDAO
    .readById(req.user.userID)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ message: "Something went wrong" });
    });
};

export default { register, info, login, logout };
