const Contact = require('../models/contact');

exports.getAllContacts = (req, res, next) => {
    Contact.findAll()
        .then(contacts => {
            res.json(contacts[0]);
        })
        .catch(error => {
            res.status(500).json({
                "message": error.message || "Some error occurred while retrieving contacts.",
                "result": false
            });
        });
}

exports.addContact = (req, res, next) => {
    const { name } = req.body;

    Contact.create(name)
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

exports.getEditContact = (req, res, next) => {
    const id = req.params.id;
    Contact.findById(id)
        .then(contact => {
            res.json(contact[0]);
        })
        .catch(error => {
            res.status(500).json({
                "message": error.message || "Some error occurred while retrieving contact.",
                "result": false
            });
        });
}

exports.editContact = (req, res, next) => {
    const { id, name } = req.body;

    Contact.updateById(id, name)
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

exports.deleteContact = (req, res, next) => {
    const id = req.params.id;
    Contact.deleteById(id)
        .then(() => {
            res.status(200).json({
                "message": "success",
                "result": true
            });
        })
        .catch((error) => {
            res.status(500).json({
                "message": error.message || "Some error occurred while deleting contact.",
                "result": false
            });
        });
}
