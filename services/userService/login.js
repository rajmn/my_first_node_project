const { User, Post, UserAttribute } = require('../../models/mother_models/Model_kernel');

const login = async (req, res) => {
    console.log('login controller service called');
    const checkLogin = await User.findOne({email:req.body.email});
    console.log(checkLogin);
    return res.status(200).json({
        'ok': 'ok'
    });
}

module.exports = login;
