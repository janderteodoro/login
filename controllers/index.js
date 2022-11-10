const homePageController = require('./homePage')
const { homePageService } = require('../services')

module.exports = {
    homePageController: homePageController({
        homePageService
    })
}