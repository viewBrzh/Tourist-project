const Place = require('../models/place');

exports.getAllPlaces = (req, res, next) => {
    Place.findAll()
        .then(places => {
            res.json(places[0]);
        })
        .catch(error => {
            res.status(500).json({
                "message": error.message || "Some error occurred while retrieving places.",
                "result": false
            });
        });
}

exports.addPlace = (req, res, next) => {
    const { Name, Image, Description, Latitude, Longtitude, Closetime, Opentime, Slideimg, Day } = req.body;

    Place.create(Name, Image, Description, Latitude, Longtitude, Closetime, Opentime, Slideimg, Day)
        .then(() => {
            res.status(200).json({
                "message": "success",
                "result": true
            });
        })
        .catch((error) => {
            res.status(200).json({
                "message": error.message,
                "result": false
            });
        });
}

exports.getEditPlace = (req, res, next) => {
    const Id = req.params.id;
    Place.findById(Id)
        .then(place => {
            res.status(200).json(place[0]);
        })
        .catch((error) => {
            res.status(500).json({
                "message": error.message || "Some error occurred while retrieving place.",
                "result": false,
                "id": Id
            });
        });
}

exports.editPlace = (req, res, next) => {
    const { Id, Name, Image, Description, Latitude, Longtitude, Closetime, Opentime, Slideimg, Day } = req.body;
    console.log(req.body)

    Place.updatePlace(Id, Name, Image, Description, Latitude, Longtitude, Closetime, Opentime, Slideimg, Day )
        .then(() => {
            res.status(200).json({
                "message": "success",
                "result": true
            });
        })
        .catch((error) => {
            res.status(200).json({
                "message": error.message,
                "result": false
            });
        });
}

exports.deletePlace = (req, res, next) => {
    const Id = req.params.id;
    Place.deleteById(Id)
        .then(() => {
            res.status(200).json({
                "message": "success",
                "result": true
            });
        })
        .catch((error) => {
            res.status(500).json({
                "message": error.message || "Some error occurred while deleting place.",
                "result": false
            });
        });
}
