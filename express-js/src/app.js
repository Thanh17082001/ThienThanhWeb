const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const handlebars = require ('express-handlebars');
const session = require ('express-session');
const handlebarsSections=require('express-handlebars-sections')
const route = require ('./routers')
// static files
app.use(express.static(path.join(__dirname,'public')))
// 
app.use(express.urlencoded({
    extended:true
}))

// http logger
app.use(morgan('combined'))
// engine 
app.engine('.hbs', handlebars.engine({
    extname: '.hbs',
    helpers: {section: handlebarsSections()}}
    ));
app.set('view engine', '.hbs');
app.set("views", path.join(__dirname, "resource/views"));
// express secsion
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,

})) 
// routes
route(app)

//   locahost
app.listen(3000, () => {})
