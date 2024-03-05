const { User, Post } = require('../../models/mother_models/model_kernel');

const paginatedList = async (userModel, req, res) => {
    console.log('get user called');
    const allUserList = await User.find()
        .skip(0)
        .limit(3);
    // .sort({ [sortBy]: sortValue })
    // .populate()
    // .exec();;
    console.log(allUserList);
    let response = {
        'status':'Success',
        'code': 200,
        'message': 'Successfully called user paginatedList',
        'data': allUserList,
    };
    res.json(response,response.code);
};
module.exports = paginatedList;