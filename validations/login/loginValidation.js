const { body, validationResult } = require('express-validator');

const loginValidation = [
    body('email').notEmpty().withMessage('Email is required').normalizeEmail(),
    body('password').notEmpty().withMessage('password is required'),
    (req, res, next) => {
        console.log('login validation called');
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: 'error',
                code: 400, 
                data: null,
                message: 'Validation Error in login middleware',
                errors: errors.array()
            }); 
        }
        next();
    }
];

module.exports = loginValidation;