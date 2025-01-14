const mongoose = require('mongoose');
const ordersSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    amount:Number,
    odesc:String,
    oid:Number,
    pid:Number,
});

const model=mongoose.model('orders', ordersSchema);
module.exports=model;
