const express = require("express");
const router = express.Router();
const placeController = require("../controllers/place");

// path
router.get("/get-all", placeController.getAllLocations);

router.post("/add-place", placeController.createLocation);

router.get("/get-place/:id", placeController.getOneLocation);

router.post("/edit-place/:id", placeController.updateLocation);

router.get("/delete-place/:id", placeController.deleteLocation);

module.exports = router;
