const paginatedList = require('../services/userService/paginatedList');
const create = require('../services/userService/create');
const register = require('../services/userService/register');
const login = require('../services/userService/login');

let userController = {};
userController.paginatedList = (req, res) => paginatedList(req, res);
userController.create = (req, res) => create(req, res);
userController.register = (req, res) => register(req, res);
userController.login = (req, res) => login(req, res);

    



module.exports = userController;