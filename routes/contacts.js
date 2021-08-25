const express = require('express');

const router = express.Router();

// @ route  GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', (req, res) => {
	res.send('Gets all contacts');
});

// @ route  POST api/contacts
// @desc    Add new contact
// @access  Private
router.put('/', (req, res) => {
	res.send('Add contact');
});

// @ route  PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.delete('/:id', (req, res) => {
	res.send('Update a contact');
});

// @ route  DELETE api/contacts/:id
// @desc    Delete contact
// @access  Private
router.post('/:id', (req, res) => {
	res.send('Delete a contact');
});

module.exports = router;
