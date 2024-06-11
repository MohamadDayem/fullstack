export class ReservationDAO {
  constructor(db /* CLASS DATABASE */) {
    //this.db = db;
    this.connection = db.connection;
  }

  create(reservation_date, user_id, ouvrage_id) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO reservation (reservation_date, user_id, ouvrage_id) VALUES (?, ?, ?);`;
      const values = [reservation_date, user_id, ouvrage_id];
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
      const query = `SELECT * FROM reservation;`;
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
      const query = `SELECT * FROM reservation WHERE id = ?;`;
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
      const query = `SELECT * FROM reservation JOIN user ON user_id = user.id JOIN ouvrage ON ouvrage_id = ouvrage.id WHERE ${filter} = ?;`;
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

  update(reservation_date, user_id, ouvrage_id, id) {
    return new Promise((resolve, reject) => {
      const query = `UPDATE reservation SET reservation_date = ?, user_id = ?, ouvrage_id = ? WHERE id = ?;`;
      const values = [reservation_date, user_id, ouvrage_id, id];
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
      const query = `DELETE FROM reservation WHERE id = ?;`;
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
