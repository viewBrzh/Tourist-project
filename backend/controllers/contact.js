const Contact = require("../models/contact");

// Get all Contact
const getAllContact = async (req, res) => {
  try {
    const contact = await Contact.findAll();
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one Contact by ID
const getOneContact = async (req, res) => {
  try {
    const Contact = await Contact.findById(req.params.id);
    if (!Contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json(Contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new contact
const createContact = async (req, res) => {
  const contact = new Contact({
    id: req.body.id,
    name: req.body.name,
  });

  try {
    const newContact = await contact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a Contact
const updateContact = async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Contact updated" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a Contact
const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllContact,
  createContact,
  updateContact,
  deleteContact,
  getOneContact,
};
