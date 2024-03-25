const db = require("../util/database");

module.exports = class Co {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static async findAll() {
    try {
      const [results, fields] = await db.execute("SELECT * FROM contact");
      return results;
    } catch (error) {
      throw error;
    }
  }

  static findById(id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM contact WHERE id = ?", [id], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        if (results.length === 0) {
          reject("contact not found");
          return;
        }
        resolve(results[0]);
      });
    });
  }

  static create(id, name) {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO place (id, name) VALUES (?, ?)",
        [id, name],
        (error, results) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(results);
        }
      );
    });
  }

  static update(id, name) {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE contact SET name = ? WHERE id = ?",
        [name, id],
        (error, results) => {
          if (error) {
            reject(error);
            return;
          }
          if (results.affectedRows === 0) {
            reject("contact not found");
            return;
          }
          resolve(results);
        }
      );
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM contact WHERE id = ?", [id], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  }
};
