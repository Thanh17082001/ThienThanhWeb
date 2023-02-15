const express = require('express')
const router = express.Router()
const orderController= require('../app/controllers/OrderController')
router.get('/history-order', orderController.historyOder)
router.post('/', orderController.order)

module.exports=router;