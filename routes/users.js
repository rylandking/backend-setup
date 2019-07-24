// A GET request is when you fetch data from the server
// A POST request is when you submitting data to the server
// A PUT request is to update something already on the server
// A DELETE request is to delete something from the server

// Register a user

const express = require('express');
const router = express.Router();

// @route   POST api/users
// @desc    Register a user
// @access  Public (Some routes are private so you need to have a token stored to access that data/info)

// The '/' pertains to the 'POST api/users' bc we are in the users.js file • and in server.js when /api/users is called it requires this file
router.post('/', (req, res) => {
  res.send('This will register a user.');
});

// Have to export the router or this won't work
module.exports = router;
