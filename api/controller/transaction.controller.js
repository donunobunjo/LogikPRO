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

exports.loadAllProducts = function (req, res) {
  Product.find().sort({ productname: 1 }).exec(function (err, products) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(products);
    }
  });
};

exports.loadAllClients = function (req, res) {
  Client.find().sort({ clientname: 1 }).exec(function (err, clients) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(clients);
    }
  });
};

exports.loadSuppliers = function (req, res) {
  Client.find({$or:[{clientType:"Both"},{clientType:"Supplier"}],active:true}).sort({ clientName: 1 }).exec(function (err, clients) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(clients);
    }
  });
};

exports.loadCustomers = function (req, res) {
  Client.find({$or:[{clientType:"Both"},{clientType:"Customer"}],active:true}).sort({ clientName: 1 }).exec(function (err, clients) {
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

exports.createStockOut = function (req, res) {
  //let transaction = new Transaction(req.body);
  let transaction = new Transaction();
  transaction.clientName = req.body.clientName;
  transaction.productName = req.body.productName;
  transaction.transDate=req.body.transDate;
  transaction.in=0;
  transaction.out=req.body.quantity;
  transaction.transType="StockOut";
  transaction.save()
     .then(() => {
        res.json(transaction);
     })
     .catch(() => {
       res.status(400).send("unable to save to database");
     });
};

exports.updateTransactionStockOut = function(req, res){
  Transaction.findById(req.params.id, function(err, transaction) {
    if (!transaction)
      res.status(404).send("data is not found");
    else {
        transaction.clientName = req.body.clientName;
        transaction.productName = req.body.productName;
        transaction.transDate = req.body.transDate;
        transaction.out = req.body.quantity;
        transaction.save().then(() => {
        res.json(transaction);
      })
      .catch(() => {
            res.status(400).send("unable to update the database");
      });
    }
  });
}

exports.productTimeline= function(req, res){
  let result = {};
  let productname=req.body.selecteditem; 
  Transaction.aggregate([{$match: { productName: productname }},{$group: {_id: "$productName",totalRecieved: { $sum: "$in" },totalIssued: { $sum: "$out" }}}]).exec(function (err, trans) {        
    if (err) {
        res.json(err);
    }
    else {
        result.agg = trans;
       // res.json(result);
    }
  });

  Transaction.find({productName:productname}).sort({ transDate: 1 }).exec(function (err, transactions) {
    if (err) {
        res.json(err);
    }
    else {
        result.resultset = transactions;
        res.json(result);
    }
});
}

exports.clientTimeline= function(req, res){
  let result = {};
  let clientname=req.body.selecteditem; 
  Transaction.aggregate([{$match: { clientName: clientname }},{$group: {_id: "$clientName",totalRecieved: { $sum: "$in" },totalIssued: { $sum: "$out" }}}]).exec(function (err, trans) {        
    if (err) {
        res.json(err);
    }
    else {
        result.agg = trans;
       // res.json(result);
    }
  });

  Transaction.find({clientName:clientname}).sort({ transDate: 1 }).exec(function (err, transactions) {
    if (err) {
        res.json(err);
    }
    else {
        result.resultset = transactions;
        res.json(result);
    }
});
}

exports.clientProductTimeline= function(req, res){
  let result = {};
  let clientname=req.body.client;
  let productname=req.body.product; 
  /*result.clientName=clientname;
  result.productName=productname;
  res.json(result);*/
 Transaction.aggregate([{$match: { $and: [{ clientName: clientname },{productName:productname}]}},{$group: {_id: "$clientName",totalRecieved: { $sum: "$in" },totalIssued: { $sum: "$out" }}}]).exec(function (err, trans) {        
    if (err) {
        res.json(err);
    }
    else {
        result.agg = trans;
       // res.json(result);
    }
  });

  Transaction.find({$and: [{clientName:clientname},{productName:productname}]}).sort({ transDate: 1 }).exec(function (err, transactions) {
    if (err) {
        res.json(err);
    }
    else {
        result.resultset = transactions;
        res.json(result);
    }
});
}