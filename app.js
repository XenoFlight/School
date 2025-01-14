const express = require('express');
const morgan = require('morgan');
const app = express();
const productsRoutes = require('./api/v1/routes/products');
const ordersRoutes = require('./api/v1/routes/orders');
const categoryRoutes = require('./api/v1/routes/category');
const mongoose = require('mongoose');

const mongoConnstr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.cb8ek.mongodb.net/WebApi2025`;

mongoose.connect(mongoConnstr).then(()=>{
    console.log('Conneced to Mongo')
});

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(process.env.GOGGLE_USER);
const secure = require('./api/v1/middelware/secure');

//app.use(secure);
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);
app.use('/category', categoryRoutes);

app.all('*' , (req,res)=>{
    return res.status(404).json({msg:"Not Found 404"})
});
module.exports = app;