// Entry point to our backend
const express = require('express');
const connectDB = require('./config/db');

// Initialize express into a variable 'app'
const app = express();

// Connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Adds a route • res.sendFile sends a file to the browser
// Using res.json because we're dealing with/making a JSON API
app.get('/', (req, res) =>
  res.send({ msg: 'Welcome to the Contact Keeper API!' })
);

// Define routes
// Whenever we hit /api/users it'll look at that file we just created
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// Use env variable when available (for production). If in staging use PORT 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT${PORT}`));
