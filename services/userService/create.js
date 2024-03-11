const TestUser = require('../../models/TestUserModel');

const create = async (userModel, req, res) => {
    console.log(userModel + ' model called');
    console.log(req.body);
    const newUser = new TestUser(req.body);
    const user = await newUser.save();
    let response = {
        'status':'Success',
        'code': 200,
        'message': 'Successfully created user',
    };
    res.json(response,response.code);
}

module.exports = create;
