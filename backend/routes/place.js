const express = require("express");
const router = express.Router();
const placeController = require("../controllers/place");

// path
router.get("/get-all", placeController.getAllPlaces);

router.post("/add-place", placeController.addPlace);

router.get("/get-place/:id", placeController.getEditPlace);

router.post("/edit-place/:id", placeController.editPlace);

router.get("/delete-place/:id", placeController.deletePlace);

module.exports = router;
