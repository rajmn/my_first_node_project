const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DATABASE);
mongoose.connection.once('open', () => {
    console.log('Connected to database');
});

mongoose.connection.on('error', (err) => {
    console.error('Database connection error:', err);
});

module.exports = mongoose;
