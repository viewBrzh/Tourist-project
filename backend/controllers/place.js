const Location = require('../models/place');

// Get all locations
const getAllLocations = async (req, res) => {
    try {
        const locations = await Location.findAll();
        res.json(locations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get one location by ID
const getOneLocation = async (req, res) => {
    try {
        const location = await Location.findById(req.params.id);
        if (!location) {
            return res.status(404).json({ message: 'Location not found' });
        }
        res.json(location);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new location
const createLocation = async (req, res) => {
    const location = new Location({
        Id: req.body.Id,
        Name: req.body.Name,
        Image: req.body.Image,
        Description: req.body.Description,
        Latitude: req.body.Latitude,
        Longitude: req.body.Longitude,
        Closetime: req.body.Closetime,
        Opentime: req.body.Opentime,
        Slideimg: req.body.Slideimg,
        Day: req.body.Day
    });

    try {
        const newLocation = await location.save();
        res.status(201).json(newLocation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a location
const updateLocation = async (req, res) => {
    try {
        await Location.findByIdAndUpdate(req.params.id, req.body);
        res.json({ message: 'Location updated' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a location
const deleteLocation = async (req, res) => {
    try {
        await Location.findByIdAndDelete(req.params.id);
        res.json({ message: 'Location deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllLocations,
    createLocation,
    updateLocation,
    deleteLocation,
    getOneLocation
};
