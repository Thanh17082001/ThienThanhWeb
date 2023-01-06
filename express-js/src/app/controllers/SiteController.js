const productDb = require('../model/product')
const accountController=require('./AccountController')
class SiteController {
    // [Get] home page
    async index(req, res) {
        var products= await productDb.getProduct();
        var username=accountController.displayUser(req.session.name)
        res.render('home',{
            title:"trang chu",
            products,
            username
        })
    }
    // [get] gioi thieu
    introduce(req, res) {
        var username=accountController.displayUser(req.session.name)  
        res.render('introduce',{
            title:"Gio thieu",
            username
        })
    }
    // [get] lien he
    contact(req, res) {
        var username=accountController.displayUser(req.session.name)  
        res.render('contacts',{
            title:"Lien he",
            username
        })
    }
}
module.exports= new SiteController;