const mongoose = require('mongoose');
const categorySchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    pname:String,
    pdesc:String,
    cid:Number,
    });

const model=mongoose.model('category', categorySchema);
module.exports=model;
