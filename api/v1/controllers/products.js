module.exports = {

    getAll:(req,res) => {
        try{
            return res.status(200).json({msg : "all products"});
        }
        catch{
            return res.status(500).json({msg : "500 server error"});
        }
    },
    getByID:(req,res) => {
        try{
            return res.status(200).json({msg : `product ${req.params.id}`});
        }
        catch{
            return res.status(500).json({msg : "500 server error"});
        }
    },
    updateById:(req,res) => {
        try{
            return res.status(200).json({msg : `product ${req.params.id} updated`});
        }
        catch{
            return res.status(500).json({msg : "500 server error"});
        }
    },
    postNew:(req,res) => {
        try{
            return res.status(200).json({msg : "product added"});
        }
        catch{
            return res.status(500).json({msg : "500 server error"});
        }
    },
    deleteById:(req,res) => {
        try{
            return res.status(200).json({msg : `product ${req.params.id} deleted`});
        }
        catch{
            return res.status(500).json({msg : "500 server error"});
        }
    },
}