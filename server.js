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

// return reservation page

// return view tables page

// API get all table reservations

// API get all table wait list reservations

// API post new table reservation (logic to chosen between reservation and wait list)

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
