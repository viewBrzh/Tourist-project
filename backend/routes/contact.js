const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact");

// path
router.get("/get-all-contact", contactController.getAllContacts);

router.post("/add-contact", contactController.addContact);

router.put("/update-contact/:id", contactController.editContact);

router.get("/get-contact/:id", contactController.getEditContact);

router.get("/delete-contact/:id", contactController.deleteContact);

module.exports = router;
