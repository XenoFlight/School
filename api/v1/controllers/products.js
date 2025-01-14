const productModel = require('../modules/products');

module.exports = {

    getAll: (req, res) => {
        try {
            productModel.find().then((products) => {
                return res.status(200).json(products);
            });
        }
        catch {
            return res.status(500).json({ msg: "500 server error" });
        }
    },
    getByID: (req, res) => {
        try {
            productModel.find({ pid: req.params.id }).then((products) => {
                return res.status(200).json(products)
            });
        }
        catch {
            return res.status(500).json({ msg: "500 server error" });
        }
    },
    updateById: (req, res) => {
        try {
            productModel.find({ pid: req.params.id }).then((products) => {
                return res.status(200).json(products)
            });
        }
        catch {
            return res.status(500).json({ msg: "500 server error" });
        }
    },
    postNew: (req, res) => {
        try {
            productModel.create(req.body).then((products) => {
                productModel.save()
                return res.status(200).json(products);
            });
        }
        catch {
            return res.status(500).json({ msg: "500 server error" });
        }
    },
    deleteById: (req, res) => {
        try {
            productModel.find({ pid: req.params.id }).then((products) => {
                return res.status(200).json(products)
            });
        }
        catch {
            return res.status(500).json({ msg: "500 server error" });
        }
    },
}