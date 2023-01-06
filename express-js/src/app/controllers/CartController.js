const cartDb = require('../model/cart')
const accountController=require('./AccountController')
class CartController {
    async addToCart(req, res) {
        if(req.query.id){
            if(req.session.cartItem==null){
                let productItem=await cartDb.findByID(Number(req.query.id))
                productItem[0].quanlityOrder=1;
                productItem[0].totalPrice=productItem[0].price;
                req.session.cartItem=productItem
                res.redirect(req.get('referer'))
            }else{
                var oldSession=req.session.cartItem;
                var indexId=await cartDb.checkProductCart(oldSession,req.query.id)
                if(indexId >-1){
                    let productItem=await cartDb.findByID(Number(req.query.id))
                    req.session.cartItem[indexId].quanlityOrder++ ;
                    req.session.cartItem[indexId].totalPrice=Number(req.session.cartItem[indexId].price) * Number( req.session.cartItem[indexId].quanlityOrder);
                    res.redirect(req.get('referer'))
                }
                else{
                    let productItem=await cartDb.findByID(Number(req.query.id))
                    productItem[0].quanlityOrder=1;
                    productItem[0].totalPrice=productItem[0].price;
                    var Items=await cartDb.addProductToSession(oldSession,productItem[0])
                    req.session.cartItem=Items
                    res.redirect(req.get('referer'))
                }
            }     
        }
        else{
            var username=accountController.displayUser(req.session.name)
            var displayCart = req.session.cartItem
            res.render('cart',{
                title: "Gio Hang",
                displayCart,
                username
            })
        }
    }

    async delete(req, res) {
        var IsDeleted=await cartDb.cartDelete(req.params.slug,req.session.cartItem)
        req.session.cartItem=IsDeleted;
        res.redirect('/cart') 
        // res.json(req.params.slug)
    }
    async updateQuanlityCart(req,res){
        var indexId=await cartDb.checkProductCart(req.session.cartItem,req.query.id)
        if(req.query.quanlity <= 0){
            req.query.quanlity=1
        }
        req.session.cartItem[indexId].quanlityOrder=req.query.quanlity
        req.session.cartItem[indexId].totalPrice=req.query.quanlity*req.session.cartItem[indexId].price
        res.redirect('/cart')
    }
    async displayCart(req,res){
        res.render('cart')
    }
}
module.exports= new CartController; 