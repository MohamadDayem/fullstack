export class StatistiqueDAO {
    constructor(db /* CLASS DATABASE */) {
      //this.db = db;
      this.connection = db.connection;
    }
  
    read() {
      return new Promise((resolve, reject) => {
        const query = `SELECT * FROM lending JOIN ouvrage on lending.ouvrage_id = ouvrage.id JOIN adherent ON lending.adherent_id = adherent.id;`;
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
  
  }
  