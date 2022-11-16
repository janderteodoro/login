const jwt = require('jsonwebtoken')
const userController = require('./userController')
const mongo = require('../repository/db/mongo')
const config = require('../config')
const { userService } = require('../services')

module.exports = {
    userController: userController({
        userService, mongo, config, jwt
    }),
}