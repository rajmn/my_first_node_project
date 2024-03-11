const express = require('express');
const app = express();
var multer = require('multer');
var upload = multer();
// Parse JSON bodies
app.use(express.json());

// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // Parse application/json
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true })); 

// for parsing multipart/form-data
app.use(upload.any());  
app.use(express.static('public'));



module.exports = app;