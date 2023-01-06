const newsDB = require('../model/news')
const accountController=require('./AccountController')
class NewsController {
    // [Get] news page
    
    async news(req, res,next) {
        var username=accountController.displayUser(req.session.name)
        try {
            var news= await newsDB.getNews();
            res.render('news',{title: "Tin Tuc ",news,username})
        } catch (err) {
            next(err);
        }
    }
    // [get] chitiet
    async newsDetail(req, res) {
        var username=accountController.displayUser(req.session.name)
        var newsDetail= await newsDB.findNews(req.params.slug);
        res.render('news-detail',{
            title: "tin tuc chi tiet",
            newsDetail,
            username
        })
    }
    
}
module.exports= new NewsController; // export ra 1 doi tuong