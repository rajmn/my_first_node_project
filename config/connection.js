const express = require('express');
const app = express();

// Parse JSON bodies
app.use(express.json());

// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // Parse application/json
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(express.static('public'));



module.exports = app;