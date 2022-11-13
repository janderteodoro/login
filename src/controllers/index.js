const homePageController = require('./homePage')
const userController = require('./userController')
const mongo = require('../repository/db/mongo')
const { homePageService, userService } = require('../services')

module.exports = {
    homePageController: homePageController({
        homePageService
    }),
    userController: userController({
        userService, mongo
    })
}