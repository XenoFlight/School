const express = require('express');
const routes = express().Router();
const { getAll, getByID, updateById, postNew, deleteById } = require('../controllers/products');

routes.get('/', getAll);
routes.get('/:id', getByID);
routes.put('/:id', updateById);
routes.post('/', postNew);
routes.delete('/:id', deleteById);

module.exports = app;