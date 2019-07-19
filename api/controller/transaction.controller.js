const Transaction = require('../model/transaction.model');
const Product = require('../model/product.model');
//Create Transaction
exports.loadProducts = function (req, res) {
    Product.find(function(err, products){
        if(err){
          res.json(err);
        }
        else {
          res.json(products);
        }
      });
};