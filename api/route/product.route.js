const express = require('express');
const productRouter = express.Router();
const productController = require('../controller/product.controller');
//Add product
productRouter.post('/add', productController.createProduct);
//Delete product
productRouter.delete('/delete/:id', productController.deleteProduct);
// update product
productRouter.post('/update/:id', productController.updateProduct);
module.exports = productRouter;


