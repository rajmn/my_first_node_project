const { User, Post, UserAttribute } = require('../../models/mother_models/Model_kernel');

const register = async (req, res) => {
    console.log('register API called');
    // const allUser = await User.find();
    req.body.salt = generateUniqueId();
    const userModel = new User()
    const isMatchedPattern = userModel.checkPassword(req.body.password);
    if (!isMatchedPattern) {
        res.json({
            'status':'error',  
            'code': 400,
            'message': 'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long',
        },400); 
    }
    const passwordHash = userModel.generateHash(req.body.salt, req.body.password);
    req.body.password = passwordHash;
    const userData = new User(req.body);
    const saveUser = await userData.save();
    req.body.user_id = saveUser._id;
    req.body.profile_image = '';
    const userAttributes = await new UserAttribute(req.body).save();
    let response = {
        'status':'Success',  
        'code': 200,
        'message': 'Successfully created user',
    };
    res.json(response,response.code);
}
module.exports = register;