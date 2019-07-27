const express = require('express');
const testRouter = express.Router();
const testController = require('../controller/test.controller');
testRouter.get('/getaggregate', testController.loadTest);
module.exports = testRouter;