const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Name is required"],
    },
    is_read: {
        type: String,
        enum: ['0', '1'],
        default: '0',
    },
    
});

module.exports = mongoose.model('Post', PostSchema);
