const paginatedList = require('../services/userService/paginatedList');
const create = require('../services/userService/create');
const register = require('../services/userService/register');
const userModel = 'User';

let userController = {};
userController.paginatedList = (req, res) => paginatedList(userModel, req, res);
userController.create = (req, res) => create(userModel, req, res);
userController.register = (req, res) => register(req, res);

    



module.exports = userController;