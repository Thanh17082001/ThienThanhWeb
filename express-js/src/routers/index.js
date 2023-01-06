const siteRouter= require('./site')
const newsRouter= require('./news')
const productRouter= require('./product')
const cartRouter= require('./cart')
const orderRouter= require('./order')
const accountRouter= require('./account')
const adminRouter= require('./admin')
function route(app){
    // news
    app.use('/news',newsRouter)
    // // product
    app.use('/product',productRouter)
    // cart
    app.use('/cart',cartRouter)
    //order
    app.use('/order',orderRouter)
    //order
    app.use('/admin',adminRouter)
    // acsount
    app.use('/',accountRouter)
    // home introduce contact
    app.use('/',siteRouter)
}
module.exports= route;