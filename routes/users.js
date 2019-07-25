// A GET request is when you fetch data from the server
// A POST request is when you submitting data to the server
// A PUT request is to update something already on the server
// A DELETE request is to delete something from the server

// Register a user

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route   POST api/users
// @desc    Register a user
// @access  Public (Some routes are private so you need to have a token stored to access that data/info)

// The '/' pertains to the 'POST api/users' bc we are in the users.js file • and in server.js when /api/users is called it requires this file
router.post(
  '/',
  [
    check('name', 'Please add a name.')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email.').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters.'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email: email });

      if (user) {
        return res.status(400).json({ msg: 'User already exists.' });
      }

      user = new User({
        name,
        email,
        password
      });

      // Encrypt the password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      // 500 reps a server error
      res.status(500).send('Server Error');
    }
  }
);

// Have to export the router or this won't work
module.exports = router;
