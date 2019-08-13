const express = require('express');
const testRouter = express.Router();
const testController = require('../controller/test.controller');
testRouter.get('/getbalances', testController.getBalances);

module.exports = testRouter;