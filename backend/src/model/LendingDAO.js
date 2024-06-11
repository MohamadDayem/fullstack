export class LendingDAO {
  constructor(db /* CLASS DATABASE */) {
    //this.db = db;
    this.connection = db.connection;
  }

  create(lending_date, return_date, user_id, ouvrage_id) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO lending (lending_date, return_date, user_id, ouvrage_id) VALUES (?, ?, ?, ?);
      `;
      const values = [lending_date, return_date, user_id, ouvrage_id];
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
      const query = `select * from lending;
      `;
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
      const query = `select * from lending where id = ?;
      `;
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

  selectFilter(filter, value) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM lending JOIN user ON user_id = user.id JOIN ouvrage ON ouvrage_id = ouvrage.id WHERE ${filter} = ?;`;
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

  update(lending_date, return_date, user_id, ouvrage_id,id) {
    return new Promise((resolve, reject) => {
      const query = `update lending SET lending_date = ?, return_date = ?, user_id = ?, ouvrage_id=? WHERE id = ?;
      `;
      const values = [lending_date, return_date, user_id, ouvrage_id, id];
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
      const query = `delete from lending where id = ?;
      `;
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
