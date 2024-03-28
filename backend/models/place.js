const db = require('../util/database');

module.exports = class Place {

    constructor(Id, Name, Image, Description, Latitude, Longitude, Closetime, Opentime, Slideimg, Day) {
        this.Id = Id;
        this.Name = Name;
        this.Image = Image;
        this.Description = Description;
        this.Latitude = Latitude;
        this.Longitude = Longitude;
        this.Closetime = Closetime;
        this.Opentime = Opentime;
        this.Slideimg = Slideimg;
        this.Day = Day;
    }

    static findAll() {
        return db.execute("SELECT Id, Name, Image, Description, Latitude, Longtitude, Closetime, Opentime, Slideimg, Day FROM place");
    }

    static findById(Id) {
        return db.execute(
            'SELECT * FROM place WHERE Id = ?',
            [Id]
        );
    }

    static deleteById(Id) {
        return db.execute(
            'DELETE FROM place WHERE Id = ?',
            [Id]
        );
    }

    static create(Name, Image, Description, Latitude, Longitude, Closetime, Opentime, Slideimg, Day) {
        return db.execute(
            'INSERT INTO place (Name, Image, Description, Latitude, Longtitude, Closetime, Opentime, Slideimg, Day) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [Name, Image, Description, Latitude, Longitude, Closetime, Opentime, Slideimg, Day]
        );
    }

    static updatePlace(Id, Name, Image, Description, Latitude, Longitude, Closetime, Opentime, Slideimg, Day) {
        return db.execute(
            'UPDATE place SET Name=?, Image=?, Description=?, Latitude=?, Longtitude=?, Closetime=?, Opentime=?, Slideimg=?, Day=? WHERE Id=?',
            [Name, Image, Description, Latitude, Longitude, Closetime, Opentime, Slideimg, Day, Id]
        );
    }
};
