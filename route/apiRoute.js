const express = require('express');
const router = express.Router();
// Require the upload middleware from 
const upload = require('../config/upload');

const { catchErrors } = require('../handlers/errorHandlers');
const userController = require('../controllers/userController');
const registrationValidation = require('../validations/registration/registerValidation');
const loginValidation = require('../validations/login/loginValidation');


// router.get('/get_user', (req, res) => {
//     let response = {
//         'status':'Success',
//         'code': 200,
//         'message': 'Successfully called',
//     };
//     res.json(response,response.code);
// });

/*
--------------------------------------------------------
router.route <--- this 2nd route is used for if you want to define
multiple route for same path

-------------------------------------------------
// Define routes for '/user'
    router.route('/user')
    .get(userController.getUser) // Handle GET requests to '/user'
    .post(userController.createUser); // Handle POST requests to '/user'
--------------------------------------------------------------------------------
*/

router.route('/get_user').get(catchErrors(userController.paginatedList));
router.post('/create_user', catchErrors(userController.create));
// router.post('/register',registerValidation, upload.single('profile_image'), catchErrors(userController.register));
router.post('/register',upload.single('profile_image'),registrationValidation, catchErrors(userController.register));
router.post('/login',loginValidation, catchErrors(userController.login));

module.exports = router; 