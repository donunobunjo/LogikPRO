const Transaction = require('../model/transaction.model');
const Product = require('../model/product.model');
const Client = require('../model/client.model');
exports.loadProducts = function (req, res) {
  Product.find({active:true}).sort({ productname: 1 }).exec(function (err, products) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(products);
    }
  });
};

exports.loadClients = function (req, res) {
  Client.find({$or:[{clientType:"Both"},{clientType:"Supplier"}],active:true}).sort({ clientName: 1 }).exec(function (err, clients) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(clients);
    }
  });
};
exports.createStockIn = function (req, res) {
  //let transaction = new Transaction(req.body);
  let transaction = new Transaction();
  transaction.clientName = req.body.clientName;
  transaction.productName = req.body.productName;
  transaction.transDate=req.body.transDate;
  transaction.out=0;
  transaction.in=req.body.quantity;
  transaction.transType="StockIn";
  transaction.save()
     .then(() => {
        res.json(transaction);
     })
     .catch(() => {
       res.status(400).send("unable to save to database");
     });
};

exports.deleteTransaction = function (req, res) {
  Transaction.findByIdAndRemove({_id: req.params.id}, function(err){
    if(err){ 
      res.json(err);
    }
    else {
      res.json('Successfully removed');
    }
  })
};

exports.updateTransaction = function(req, res){
  Transaction.findById(req.params.id, function(err, transaction) {
    if (!transaction)
      res.status(404).send("data is not found");
    else {
        transaction.clientName = req.body.clientName;
        transaction.productName = req.body.productName;
        transaction.transDate = req.body.transDate;
        transaction.in = req.body.quantity;
        transaction.save().then(() => {
        res.json(transaction);
      })
      .catch(() => {
            res.status(400).send("unable to update the database");
      });
    }
  });
}