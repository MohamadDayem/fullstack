export class OuvrageDAO {
  constructor(db /* CLASS DATABASE */) {
    //this.db = db;
    this.connection = db.connection;
  }

  create(name, author, publication_date, category_id) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO ouvrage  (name, author, publication_date, category_id) VALUES (?, ?, ?, ?);";
      const values = [name, author, publication_date, category_id];
      this.connection.execute(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  read() {
    return new Promise((resolve, reject) => {
      const query = "select * from ouvrage;";
      const values = [];
      this.connection.execute(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  readById(id) {
    return new Promise((resolve, reject) => {
      const query = "select * from ouvrage where id = ?;";
      const values = [id];
      this.connection.execute(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  selectByField(field, value) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM ouvrage JOIN category ON category_id = category.id WHERE ${field} = ?;`;
      const values = [value];
      this.connection.execute(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  update(name, author,imageURL, publication_date, category_id, id) {
    return new Promise((resolve, reject) => {
      const query = `update ouvrage SET name = ?, author = ?,imageURL = ?, publication_date = ?, category_id=? WHERE id = ?;
    `;
      const values = [name, author,imageURL, publication_date, category_id, id];
      this.connection.execute(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      const query = "delete from ouvrage where id = ?;";
      const values = [id];
      this.connection.execute(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}
