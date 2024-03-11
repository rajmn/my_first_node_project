const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Full Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        validate: {
            validator: async function (value) {
                if (!this.isModified('email')) return true; // Skip validation if email is not modified
                const user = await this.constructor.findOne({ email: value });
                return !user;
            },
            message: 'This email is already taken',
        }
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    salt: {
        type: String,
        required: true,
    },
    email_verified: {
        type: Boolean,
        default: false,
    },
    country_code: {
        type: String,
        required: true,
    },
    mobile_number: {
        type: String,
        required: true,
    },
    is_admin: {
        type: String,
        required: true,
        enum: ['0', '1'],
        default: '0',
    },
},{
    timestamps: true
    
});

// generating a hash
UserSchema.methods.generateHash = function (salt, password) {
return bcrypt.hashSync(salt + password);
};

// checking if password is valid
UserSchema.methods.validPassword = function (salt, userpassword) {
return bcrypt.compareSync(salt + userpassword, this.password);
};

// Custom validation function for password
function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}
UserSchema.methods.checkPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

module.exports = mongoose.model('User', UserSchema);

