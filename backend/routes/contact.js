const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact");

// path
router.get("/get-all-contact", contactController.getAllContact);

router.post("/add-contact", contactController.createContact);

router.post("/edit-contact/:id", contactController.updateContact);

router.get("/get-one/:id", contactController.getOneContact);

router.get("/delete-contact/:id", contactController.deleteContact);

module.exports = router;
