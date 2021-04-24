// Dependencies
const express = require("express");
const path = require("path");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
const maxReservation = 5;
const reservations = [];
const waitList = [];

// Routes

// return restaurant reservation homepage
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

// return reservation page
app.get('/make', (req, res) => res.sendFile(path.join(__dirname, 'make.html')));

// return view tables page
app.get('/view', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));

// API get all table reservations
app.get('/api/tables', (req, res) => res.json(reservations));

// API get all table wait list reservations
app.get('/api/waitlist', (req, res) => res.json(waitList));

// API post new table reservation (logic to chosen between reservation and wait list)

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
