const express = require('express');
const morgan = require('morgan');
const app = express();
const productsRoutes = require('./api/v1/routes/products');


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

console.log(process.env.GOOGLE_USER);
const secure = require('./api/v1/middelware/secure');
app.use(secure);


app.use('/product', productsRoutes);

module.exports=app;