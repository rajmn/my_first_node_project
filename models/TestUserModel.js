const mongoose = require('mongoose');

const TestUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Name is required"],
    },
    email: {
        type: String,
        required: [true,"Email is required"],
        unique: true,
        validate: {
            validator: async function (value) {
                const user = await this.constructor.findOne({ email: value });
                return !user;
            },
            message: 'This email is already taken bro',
        },
    },
    password: {
        type: String,
        required: [true,"password is required"],
    },
    salt: {
        type: String,
        required: true,
    },
    emailVerified: {
        type: Boolean,
        default: false,
    },
    country: {
        type: String,
        default:null,  
    },
    state: {
        type: String,
        default:null,  
    },
    city: {
        type: String,
        default:null,  
    },
    is_admin: {
        type: String,
        required: true,
        enum: ['0', '1'],
        default: '0',
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
    
});

module.exports = mongoose.model('TestUser', TestUserSchema);
