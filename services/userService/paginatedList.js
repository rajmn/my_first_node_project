const { TestUser, Post, User} = require('../../models/mother_models/Model_kernel');

const paginatedList = async (req, res) => {
    console.log('get user called');
    // const allUserList = await TestUser.find()
    //     .skip(0)
    //     .limit(3);
    // console.log(allUserList);
    
    // return res.status(200).send({
    //           status: "success",
    //           message: "User found.",
    //           data: allUserList
    // });

    const allUserList = await User.aggregate([
        {
            $lookup: {
                from: 'userattributes', // Name of the UserAttributes collection in MongoDB
                localField: '_id',
                foreignField: 'user_id',
                as: 'userAttributes',
            },
        },
    ]);
    
        return res.status(200).send({
            status: "success",
            message: "User found.",
            data: allUserList
        });
        // Do something with the users and their UserAttributes
      
        
    };
module.exports = paginatedList;