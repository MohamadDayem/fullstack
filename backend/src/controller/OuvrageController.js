import { Database } from "../model/Database.js";
import { OuvrageDAO } from "../model/OuvrageDAO.js";

const db = new Database();
const ouvrageDAO = new OuvrageDAO(db);

const read = (req, res) => {
  ouvrageDAO
    .read()
    .then((allOuvrage) => {
      res.json(allOuvrage);
    })
    .catch((error) => {
      res.json(error);
    });
};

const readById = (req, res) => {
  const id = req.params.id;
  ouvrageDAO
    .readById(id)
    .then((allOuvrage) => {
      res.json(allOuvrage);
    })
    .catch((error) => {
      res.json(error);
    });
};

const readByField = (req, res) => {
  const field = req.params["field"];
  const value = req.params["value"];
  ouvrageDAO
    .selectByField(field, value)
    .then((allOuvrage) => {
      res.json(allOuvrage);
    })
    .catch((error) => {
      res.json(error);
    });
};

const create = (req, res) => {
  const { name, author, publication_date, category_id } = req.body;
  ouvrageDAO
    .create(name, author, publication_date, category_id)
    .then((allOuvrage) => {
      res.json(allOuvrage);
    })
    .catch((error) => {
      res.json(error);
    });
};

const update = (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  const { name, author, imageURL, publication_date, category_id } = req.body;
  ouvrageDAO
    .update(name, author, imageURL, publication_date, category_id, id)
    .then(() => {
      res.status(201).json({ message: "ouvrage updated successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Failed to update ouvrage" });
    });
};

const deleteById = (req, res) => {
  const id = req.params.id;
  ouvrageDAO
    .delete(id)
    .then((allOuvrage) => {
      res.json(allOuvrage);
    })
    .catch((error) => {
      res.json(error);
    });
};

export default {
  read,
  readById,
  readByField,
  create,
  update,
  deleteById,
};
