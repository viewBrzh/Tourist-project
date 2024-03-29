const db = require("../util/database");

module.exports = class Contact {
  constructor(id, number, name) {
    this.id = id;
    this.number = number;
    this.name = name;
  }

  static findAll() {
    return db.execute("SELECT id, number, name FROM contact");
  }

  static findById(id) {
    return db.execute("SELECT * FROM contact WHERE id = ?", [id]);
  }

  static deleteById(id) {
    return db.execute("DELETE FROM contact WHERE id = ?", [id]);
  }

  static create(number, name) {
    return db.execute("INSERT INTO contact (number, name) VALUES (?, ?)", [
      number,
      name,
    ]);
  }

  static updateById(id, number, name) {
    return db.execute("UPDATE contact SET number = ?, name = ? WHERE id = ?", [
      number,
      name,
      id,
    ]);
  }
};
