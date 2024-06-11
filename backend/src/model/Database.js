import { createConnection } from "mysql2";
export class Database {
  connection = null;

  constructor() {
    this.connection = createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "library",
    });
  }

  stop() {
    this.connection.end();
  }
}
