const db = require('../util/database');

module.exports = class Contact {

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static findAll() {
        return db.execute('SELECT id, name FROM contact');
    }

    static findById(id) {
        return db.execute('SELECT * FROM contact WHERE id = ?', [id]);
    }

    static deleteById(id) {
        return db.execute('DELETE FROM contact WHERE id = ?', [id]);
    }

    static create(name) {
        return db.execute('INSERT INTO contact (name) VALUES (?)', [name]);
    }

    static updateById(id, name) {
        return db.execute('UPDATE contact SET name = ? WHERE id = ?', [name, id]);
    }
};
