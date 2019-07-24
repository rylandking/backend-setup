// A GET request is when you fetch data from the server
// A POST request is when you submitting data to the server
// A PUT request is to update something already on the server
// A DELETE request is to delete something from the server

// CRUD functionality - Create, Read, Update, Delete

const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all of auth user's contacts
// @access  Private (bc have to be logged in to access them)
router.get('/', (req, res) => {
  res.send('Get all contacts.');
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Add contact.');
});

// @route   PUT api/contacts/:id • bc have to specific which contact we want to update
// @desc    Update a contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update contact.');
});

// @route   DELETE api/contacts/:id
// @desc    Delete a contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact.');
});

// Have to export the router or this won't work
module.exports = router;
