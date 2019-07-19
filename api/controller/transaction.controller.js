const Transaction = require('../model/transaction.model');
const Product = require('../model/product.model');
const Client = require('../model/client.model');
//Create Transaction
exports.loadProducts = function (req, res) {
  // Product.find(function(err, products){
   Product.find({}).sort({ productname: 1 }).exec(function (err, products) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(products);
      //products = prods;
    }
  });
};

exports.loadClients = function (req, res) {
  // Product.find(function(err, products){
  Client.find({}).sort({ clientName: 1 }).exec(function (err, clients) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(clients);
      //products = prods;
    }
  });
};