const express = require('express')
const router = express.Router()
const accountController= require('../app/controllers/AccountController')
router.post('/login', accountController.checkEmail)
router.get('/register', accountController.register)
router.post('/register', accountController.createUser)
router.get('/logout', accountController.logout)
router.get('/login', accountController.login)
module.exports=router;