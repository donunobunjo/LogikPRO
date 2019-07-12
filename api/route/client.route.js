const express = require('express');
const clientRouter = express.Router();
const clientController = require('../controller/client.controller');
//Add client
clientRouter.post('/add', clientController.createClient);
//Delete client
clientRouter.delete('/delete/:id', clientController.deleteClient);
// update Client
clientRouter.post('/update/:id', clientController.updateClient);
module.exports = clientRouter;