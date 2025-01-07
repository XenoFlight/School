const express = require('express');
const routes = express().Router();
const {getAll,getByID,updateById,postNew,deleteById} = require('../controllers/products');

routes.get('/', getAll);
routes.get('/', getByID);
routes.get('/', updateById);
routes.get('/', postNew);
routes.get('/', deleteById);

module.exports = app;