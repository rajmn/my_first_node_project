const mongoose = require('mongoose');

const UserAttributes = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    country: {
        type: String,
        required: [true, "Country Name is required"]
    },
    state: {
        type: String,
        required: [true, "State Name is required"]
    },
    city: {
        type: String,
        required: [true, "City Name is required"]
    },
    profile_image: {
        type: String,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('UserAttribute', UserAttributes);