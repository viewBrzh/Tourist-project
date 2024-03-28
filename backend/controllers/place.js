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
  
        let Name = req.body.Name;
        let Image = req.body.Image;
        let Description = req.body.Description;
        let Latitude = req.body.Latitude;
        let Longitude = req.body.Longitude;
        let Closetime = req.body.Closetime;
        let Opentime = req.body.Opentime;
        let Slideimg = req.body.Slideimg;
        let Day = req.body.Day;


    try {
        const newLocation = await Location.create(Name, Image, Description, Latitude, Longitude, Closetime, Opentime, Slideimg, Day);
        res.json(newLocation);
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
