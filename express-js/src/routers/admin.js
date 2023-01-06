const express = require('express')
const router = express.Router()
const adminController= require('../app/controllers/AdminController')
// router.get('/create', adminController.newsDetail)
router.get('/show', adminController.show)
router.get('/bin', adminController.showBin)
router.get('/restore', adminController.restore)

router.post('/edit', adminController.update)
router.get('/edit', adminController.edit)

router.get('/create', adminController.create)
router.post('/create', adminController.addProduct)

router.get('/news', adminController.news)
router.get('/post-news', adminController.postNews)
router.post('/post-news', adminController.addNews)

router.get('/delete', adminController.delete)

router.get('/display-order', adminController.displayOrder)

router.get('/', adminController.displayLoginAdmin)
router.post('/login', adminController.checkAdmin)
module.exports=router;