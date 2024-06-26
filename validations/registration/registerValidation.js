const { body, validationResult } = require('express-validator');

const validateForm = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email').normalizeEmail(),
    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}$/)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'),
    body('country').notEmpty().withMessage('country is required'),
    body('state').notEmpty().withMessage('state is required'),
    body('city').notEmpty().withMessage('city is required'),
    
    (req, res, next) => {
        console.log('from regi validation');
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: 'error',
                code: 400, 
                data: null,
                message: 'Validation Error in middleware',
                errors: errors.array()
            });
        }
        next();
    }
];

module.exports = validateForm;
