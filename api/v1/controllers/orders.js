const ordersModel = require('../modules/orders');

module.exports = {

    getAll: (req, res) => {
        try {
            ordersModel.find().then((data) => {
                return res.status(200).json(data);
            });
        }
        catch {
            return res.status(500).json({ msg: "500 server error" });
        }
    },
    getByID: (req, res) => {
        try {
            ordersModel.find({ oid: req.params.id }).then((data) => {
                return res.status(200).json(data)
            });
        }
        catch {
            return res.status(500).json({ msg: "500 server error" });
        }
    },
    updateById:(req,res) => {
        try{
            ordersModel.updateOne({oid:req.params.id},req.body).then((data) =>{
                return res.status(200).json(data);
            });
        }
        catch{
            return res.status(500).json({msg : "500 server error"});
        }
    },
    postNew: (req, res) => {
        try{
            ordersModel.insertMany(req.body).then((data)=>{
                return res.status(200).json(data)
            });
        }
        catch{
            return res.status(500).json({msg : "500 server error"});
        }
    },
    deleteById:(req,res) => {
        try{
            ordersModel.deleteOne({oid:req.params.id},req.body).then((data) =>{
                return res.status(200).json(data);
            });
        }
        catch{
            return res.status(500).json({msg : "500 server error"});
        }
    },
}