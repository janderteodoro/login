const express = require('express')
const router = express.Router()
const controllers = require('../controllers')
const { validateSchema } = require('../middlewares/validateSchema')
const validateJwt = require('../middlewares/validateJwt')
const { userSchema } = require('../schema')

router.post('/user/create', validateSchema(userSchema.create), controllers.userController.createUser)
router.delete('/user/delete', validateJwt(), validateSchema(userSchema.delete), controllers.userController.deleteUser)
router.get('/user/list', validateJwt(), controllers.userController.listUsers)
router.post('/user/login',validateSchema(userSchema.login), controllers.userController.loginUser)

module.exports = router