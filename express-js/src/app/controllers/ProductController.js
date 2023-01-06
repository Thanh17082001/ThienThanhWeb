const productDb = require('../model/product')
const accountController=require('./AccountController')
class ProductController {
    // [Get] 
    async  product(req, res,next) {
      var username=accountController.displayUser(req.session.name)
        try {
          var products= await productDb.getProduct();
          res.render('product',{
            title :"San pham",
            products,
            username
          })
          } catch (err) {
            next(err);
          }
        }
    
    // [get]
    async productDetail(req, res) {
      var productsDetail= await productDb.findProduct(req.params.slug);
      var username=accountController.displayUser(req.session.name)
      res.render('product-detail',{
        title: "Chi tiet san pham",
        productsDetail,
        username
      })
    }
    
}
module.exports= new ProductController; // export ra 1 doi tuong