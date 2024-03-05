const express = require('express');
const app = express();
// Parse JSON bodies
app.use(express.json());
module.exports = app;