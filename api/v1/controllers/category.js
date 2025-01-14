const categoryModel = require('../modules/category');

module.exports = {

    getAll: (req, res) => {
        try {
            categoryModel.find().then((data) => {
                return res.status(200).json(data);
            });
        }
        catch {
            return res.status(500).json({ msg: "500 server error" });
        }
    },
    getByID: (req, res) => {
        try {
            categoryModel.find({ cid: req.params.id }).then((data) => {
                return res.status(200).json(data)
            });
        }
        catch {
            return res.status(500).json({ msg: "500 server error" });
        }
    },
    updateById:(req,res) => {
        try{
            categoryModel.updateOne({cid:req.params.id},req.body).then((data) =>{
                return res.status(200).json(data);
            });
        }
        catch{
            return res.status(500).json({msg : "500 server error"});
        }
    },
    postNew: (req, res) => {
        try{
            categoryModel.insertMany(req.body).then((data)=>{
                return res.status(200).json(data)
            });
        }
        catch{
            return res.status(500).json({msg : "500 server error"});
        }
    },
    deleteById:(req,res) => {
        try{
            categoryModel.deleteOne({cid:req.params.id},req.body).then((data) =>{
                return res.status(200).json(data);
            });
        }
        catch{
            return res.status(500).json({msg : "500 server error"});
        }
    },
}