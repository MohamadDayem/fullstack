import { Database } from "../model/Database.js";
import { UserDAO } from "../model/UserDAO.js";

const db = new Database();
const userDAO = new UserDAO(db);

const read = (req, res) => {
  userDAO
    .read()
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.json(error);
    });
};

const readById = (req, res) => {
  if (
    parseInt(req.params.id) === req.user.userID ||
    req.user.role === "Admin"
  ) {
    const id = req.params.id;
    userDAO
      .readById(id)
      .then((user) => {
        res.json(user);
      })
      .catch((error) => {
        res.json(error);
      });
  }
};

const readByField = (req, res) => {
  const field = req.params["field"];
  const value = req.params["value"];
  userDAO
    .selectFilter(field, value)
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.json(error);
    });
};

const create = (req, res) => {
  const { firstname, lastname, address, phone, email } = req.body;
  userDAO
    .create(firstname, lastname, address, phone, email)
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.json(error);
    });
};

const update = (req, res) => {
  if (
    parseInt(req.params.id) === req.user.userID ||
    req.user.role === "Admin"
  ) {
    const id = req.params.id;
    const { firstname, lastname, address, phone, email, password } = req.body;
    userDAO
      .update(firstname, lastname, address, phone, email, password, id)
      .then(() => {
        res.status(201).json({ message: "User updated successfully" });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Failed to update user" });
      });
  } else {
    res.status(403).json({ message: "Forbidden access" });
  }
};

const deleteById = (req, res) => {
  if (
    parseInt(req.params.id) === req.user.userID ||
    req.user.role === "Admin"
  ) {
    const id = req.params.id;
    userDAO
      .delete(id)
      .then(() => {
        res.status(201).json({ message: "User deleted successfully" });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Failed to delete user" });
      });
  } else {
    res.status(401).json({ message: "Forbidden access" });
  }
};

export default {
  read,
  readById,
  readByField,
  create,
  update,
  deleteById,
};
