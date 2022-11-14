const express = require('express')
const router = express.Router()
const controllers = require('../controllers')
const { validateSchema } = require('../middlewares/validateSchema')
const { userSchema } = require('../schema')

router.get('/', controllers.homePageController.get)
router.post('/', controllers.homePageController.post)
router.post('/user/create', validateSchema(userSchema.create), controllers.userController.createUser)
router.delete('/user/delete', validateSchema(userSchema.delete), controllers.userController.deleteUser)

module.exports = router