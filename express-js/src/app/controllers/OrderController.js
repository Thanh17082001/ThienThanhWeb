const userDb = require('../model/account')
const productDb = require('../model/product')
const orderDb = require('../model/order')
class OrderController {
    
    async order(req, res){
        var idUser= await userDb.getIdUser(req.session.user)
        if(idUser){ 
            await orderDb.addOrder(idUser,req.body.phone,req.body.address,1)
            var infoProducts= await orderDb.infoProducts(req.session.cartItem)
            await orderDb.addOrderDetail(idUser,infoProducts)
            var infoProducts2= await orderDb.historyOder(idUser)
            req.session.cartItem=null
            res.redirect('/cart')
        }else{
            res.render('./login',{username:'Tài khoản'})
        }
    }
    async historyOder(req,res) {
        var idUser= await userDb.getIdUser(req.session.user)
        if(idUser){
            var rows= await orderDb.test(idUser);
            // res.json(rows[0].infos)
            res.render("history-order",{
                username:req.session.name ? req.session.name : "Tài Khoản",
                userOrder:req.session.name ? req.session.name : "",
                rows:rows
            })
        }else{
            res.render('./login',{username:'Tài khoản'})
        }
       

    }
}
module.exports= new OrderController;  