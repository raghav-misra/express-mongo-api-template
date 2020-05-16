// Import ENV variables:
const dotenv = require("dotenv");
dotenv.config();

// Express Init:
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Mongo Init:
const mongoose = require("mongoose");
mongoose.connect(
    process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

/* -------------------------------- */
/* -------- API ENDPOINTS! -------- */
/* -------------------------------- */

app.get("/", (req, res) => res.send("Welcome to Epic Template!"));

// Server up at 6969:
app.listen(6969, () => console.log("OMG! API served @ :6969!"));