const express = require('express')
const router = express.Router()
const cartController= require('../app/controllers/CartController')
router.get('/delete/:slug', cartController.delete)
router.get('/update/?', cartController.updateQuanlityCart)
router.get('/?', cartController.addToCart)
router.get('/', cartController.displayCart)
module.exports=router;