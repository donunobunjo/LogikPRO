const express = require('express');
const transactionRouter = express.Router();
const transactionController = require('../controller/transaction.controller');
//Add product
transactionRouter.get('/getproducts', transactionController.loadProducts);
module.exports = transactionRouter;