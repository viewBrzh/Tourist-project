const db = require('../util/database');

module.exports = class Place {
  constructor(name, image, description, latitude, longitude, closetime, opentime, slideimg, day) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.latitude = latitude;
    this.longitude = longitude;
    this.closetime = closetime;
    this.opentime = opentime;
    this.slideimg = slideimg;
    this.day = day;
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
      db.query('SELECT * FROM place WHERE Id = ?', [placeId], (error, results) => {
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

  

  static create(name, image, description, latitude, longitude, closetime, opentime, slideimg, day) {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO place (Name, Image, Description, Latitude, Longtitude, Closetime, Opentime, Slideimg, Day) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [name, image, description, latitude, longitude, closetime, opentime, slideimg, day],
      (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        if (results.affectedRows === 0) {
          reject(new Error('Failed to insert data'));
          return;
        }
        resolve(results);
      }
    );
  });
}


  static update(placeId, name, image, description, latitude, longitude, closetime, opentime, slideimg, day) {
    return new Promise((resolve, reject) => {
      db.query(
        'UPDATE place SET Name = ?, Image = ?, Description = ?, Latitude = ?, Longitude = ?, Closetime = ?, Opentime = ?, Slideimg = ?, Day = ? WHERE Id = ?',
        [name, image, description, latitude, longitude, closetime, opentime, slideimg, day, placeId],
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
      db.query('DELETE FROM place WHERE Id = ?', [placeId], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  }
};
