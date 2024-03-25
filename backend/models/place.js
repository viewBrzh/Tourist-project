const db = require('../util/database');

module.exports = class Place {
  constructor(place_name, place_id, location) {
    this.place_name = place_name;
    this.place_id = place_id;
    this.location = location;
  }

  static async findAll() {
    try {
      const [results, fields] = await db.execute('SELECT * FROM place');
      return results;
    } catch (error) {
      throw error;
    }
  }

  static findById(placeId) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM place WHERE place_id = ?', [placeId], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        if (results.length === 0) {
          reject('Place not found');
          return;
        }
        resolve(results[0]);
      });
    });
  }

  static create(place_name, place_id, location) {
    return new Promise((resolve, reject) => {
      db.query(
        'INSERT INTO place (place_name, place_id, location) VALUES (?, ?, ?)',
        [place_name, place_id, location],
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

  static update(placeId, place_name, location) {
    return new Promise((resolve, reject) => {
      db.query(
        'UPDATE place SET Name = ?, location = ? WHERE place_id = ?',
        [place_name, location, placeId],
        (error, results) => {
          if (error) {
            reject(error);
            return;
          }
          if (results.affectedRows === 0) {
            reject('Place not found');
            return;
          }
          resolve(results);
        }
      );
    });
  }

  static delete(placeId) {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM places WHERE place_id = ?', [placeId], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  }
};
