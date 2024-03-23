const express = require("express");
const router = express.Router();
const touristController = require("../controllers/tourist");

// path
router.get("/tourist", touristController.getAllTourist);

router.post("/add-tourist", touristController.addTourist);

router.get("/edit-tourist/:tourist_id", touristController.getEditTourist);

router.post("/edit-tourist", touristController.editTourist);

router.get("/delete-tourist", touristController.deleteTourist);

module.exports = router;
