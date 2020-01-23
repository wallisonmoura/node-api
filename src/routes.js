const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController')

routes.get('/products', ProductController.read);
routes.get('/products/:id', ProductController.readById);
routes.post('/products', ProductController.create);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

module.exports = routes;