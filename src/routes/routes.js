const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.get('/', controllers.homePageController.get)
router.post('/', controllers.homePageController.post)

module.exports = router