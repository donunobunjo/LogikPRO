const Transaction = require('../model/transaction.model');
const Product = require('../model/product.model');
const Client = require('../model/client.model');
//const Tran=Transaction;
exports.loadTest = function (req, res) {
    let tst = {};
    let parm = "kay"
    Transaction.aggregate([{$match: { productName: parm }},{$group: {_id: "$productName",totalRecieved: { $sum: "$in" },totalIssued: { $sum: "$out" }}}]).exec(function (err, trans) {        
        if (err) {
            res.json(err);
        }
        else {
            tst.lala = trans;
           // tst.lala = "heheheheheheh";
           // res.json(tst);
        }
    });
    Product.find({ active: true }).sort({ productname: 1 }).exec(function (err, products) {
        if (err) {
            res.json(err);
        }
        else {
           // tst.prod = "hat";
            tst.don = products;
        }
    });
    Client.find({ $or: [{ clientType: "Both" }, { clientType: "Supplier" }], active: true }).sort({ clientName: 1 }).exec(function (err, clients) {
        if (err) {
            res.json(err);
        }
        else {
            tst.carol = clients;
            // res.json(tst);
        }
    });
    Transaction.find({productName:parm}).exec(function (err, transactions) {
        if (err) {
            res.json(err);
        }
        else {
            tst.foad = transactions;
            res.json(tst);
        }
    });

   /* Transaction.aggregate([{$match: { productName: "kay" }},{$group: {_id: "$productName",totalRecieved: { $sum: "$in" },totalIssued: { $sum: "$out" }}}]).exec(function (err, trans) {        
        if (err) {
            res.json(err);
        }
        else {
            tst.lala = trans;
           // tst.lala = "heheheheheheh";
            res.json(tst);
        }
    });*/
}