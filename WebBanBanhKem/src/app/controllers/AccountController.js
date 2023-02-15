
const accountDB = require('../model/account')
const siteController=require('./SiteController')
class AccountController {
    async checkEmail(req, res){
        var isUser= await accountDB.checkAccount(req.body.email, req.body.password);
        if(isUser.length==1){
                req.session.user = req.body.email
                req.session.name = isUser[0].fullname
                req.session.save(function (err) {
                    if (err) return next(err)
                    res.redirect('/') 
                })
        }else{
            res.redirect('/login')
        }
    }

    async login(req, res) {
        res.render('login',{
            username:'Tài khoản'
        })
    }
    
    register(req, res) {  
        res.render('register',{username:"Tài Khoản"})
    }

    async createUser(req,res){
        var isUser= await accountDB.createAccout(req.body.fullname,req.body.email, req.body.password)
        if(isUser==0){
            res.render('register',{message: 'Email đã tồn tại, Sử dụng email khác!'})
        }else{
            res.redirect('/login')
        }
       
    }

     displayUser(sessionName){
        var username="Tài khoản"
        if(sessionName){
            username=sessionName
        }
        return username
    }

    async logout(req,res){
        req.session.destroy((err) => {
            if (err) res.redirect('/500');
            res.redirect('back');
        })
    }
}
module.exports= new AccountController; // export ra 1 doi tuong