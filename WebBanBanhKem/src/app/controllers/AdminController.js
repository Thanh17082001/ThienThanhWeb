const productDB = require('../model/product')
const accountDB = require('../model/account')
const orderDB = require('../model/order')
const newsDB = require('../model/news')
class AdminController {
    // [Get] news page
    
    async show(req, res,next) {
        var itemsProducts= await productDB.getProduct();
        res.render('admin/show-products',{
            layout:"main-admin",
            itemsProducts,
            totalProduct:itemsProducts.length
        })
    }
    async news(req, res,next) {
        var itemsNews= await newsDB.getNews();
        res.render('admin/show-news',{
            layout:"main-admin",
            itemsNews,
            totalProduct:itemsNews.length
        })
    }

    async edit(req, res) {
        var itemsEdit= await productDB.findProduct(req.query.id)
        res.render('admin/edit-product',{
            layout:"main-admin",
            itemsEdit
        })
    }
    async update(req,res){
        await productDB.updateProduct(req.body.id,req.body.name,req.body.quanlity,req.body.price)
        res.redirect('/admin/show')
    }

    async create(req, res) {
        res.render('admin/create-product',{
            layout:"main-admin",
        })
    }
    async postNews(req, res) {
        res.render('admin/post-news',{
            layout:"main-admin",
        })
    }

    async addNews(req, res) {
        await newsDB.addNews(req.body)
        res.render('admin/post-news',{
            layout:"main-admin",
            message: 'Đã đăng bài viết !!!'
        })
    }

    async addProduct(req, res) {
        await productDB.addProduct(req.body)
        res.render('admin/create-product',{
            layout:"main-admin",
            message: 'Thêm sản phẩm thành công!'
        })
    }

    async delete(req, res){
        await productDB.deleteProduct(req.query.id)
        res.redirect('/admin/show')
    }
    async restore(req, res){
        await productDB.restore(req.query.id)
        res.redirect('back')
    }

    async displayOrder(req, res){
        var orders= await orderDB.allOrder()
        // res.json(orders)
        res.render('admin/display-order',{
            layout:"main-admin",
            orders
        })
    }
    async displayLoginAdmin(req, res){
        res.render('admin/login-admin')
    }

    async checkAdmin(req, res){
        var isUser= await accountDB.checkAccountAdmin(req.body.email, req.body.password);
        if(isUser.length==1){
            res.redirect('/admin/show')
        }else{
            res.redirect('back')
        }
    }

    async showBin(req, res,next) {
        var itemsProducts= await productDB.deleted();
        res.render('admin/show-bin',{
            layout:"main-admin",
            itemsProducts,
            totalProduct:itemsProducts.length
        })
    }
}
module.exports= new AdminController; // export ra 1 doi tuong