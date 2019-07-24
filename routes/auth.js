// A GET request is when you fetch data from the server
// A POST request is when you submitting data to the server
// A PUT request is to update something already on the server
// A DELETE request is to delete something from the server

// Two routes: 1. Get the logged in user. 2. To log in the user and get the token.

const express = require('express');
const router = express.Router();

// @route   POST api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', (req, res) => {
  res.send('Get logged in user.');
});

// @route   POST api/auth
// @desc    Auth user and get token
// @access  Public
router.post('/', (req, res) => {
  res.send('Log in user');
});

// Have to export the router or this won't work
module.exports = router;
