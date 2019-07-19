const express = require('express');
const transactionRouter = express.Router();
const transactionController = require('../controller/transaction.controller');
transactionRouter.get('/getproducts', transactionController.loadProducts);
transactionRouter.get('/getclients', transactionController.loadClients);
transactionRouter.post('/createstockin', transactionController.createStockIn);
module.exports = transactionRouter;