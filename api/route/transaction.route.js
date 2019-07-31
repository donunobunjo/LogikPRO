const express = require('express');
const transactionRouter = express.Router();
const transactionController = require('../controller/transaction.controller');
transactionRouter.get('/getproducts', transactionController.loadProducts);
transactionRouter.get('/getallproducts', transactionController.loadAllProducts);
transactionRouter.get('/getallclients', transactionController.loadAllClients);
transactionRouter.get('/getsuppliers', transactionController.loadSuppliers);
transactionRouter.get('/getcustomers', transactionController.loadCustomers);
transactionRouter.post('/createstockin', transactionController.createStockIn);
transactionRouter.delete('/delete/:id', transactionController.deleteTransaction);
transactionRouter.post('/update/:id', transactionController.updateTransaction);
transactionRouter.post('/createstockout', transactionController.createStockOut);
transactionRouter.post('/updatestockout/:id', transactionController.updateTransactionStockOut);
transactionRouter.post('/producttimeline', transactionController.productTimeline);
transactionRouter.post('/clienttimeline', transactionController.clientTimeline);
transactionRouter.post('/clientproducttimeline', transactionController.clientProductTimeline);
transactionRouter.post('/returnin', transactionController.returnIn);
transactionRouter.post('/returnout', transactionController.returnOut);
transactionRouter.post('/chronological', transactionController.chronological);
module.exports = transactionRouter;