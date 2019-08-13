const Transaction = require('../model/transaction.model');
const Product = require('../model/product.model');
const Client = require('../model/client.model');
const Balance = require('../model/balance.model');
//const Tran=Transaction;
exports.loadTest = function (req, res) {
    let tst = {};
    let parm = "kay"
    Transaction.aggregate([{ $match: { productName: parm } }, { $group: { _id: "$productName", totalRecieved: { $sum: "$in" }, totalIssued: { $sum: "$out" } } }]).exec(function (err, trans) {
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
    Transaction.find({ productName: parm }).exec(function (err, transactions) {
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
exports.getBalances = function (req, res) {
    /*
    //working code not for delete
    Balance.find().exec(function (err, balances) {
        var n = balances.length;
        for (var i = 0; i < n; i++) {
            var ball = balances[i];
            var productname=ball.productName;
            var totalrecieved=5;
            var totalissued=2;
            Transaction.aggregate([{$match: { productName: productname }},{$group: {_id: "$productName",totalRecieved: { $sum: "$in" },totalIssued: { $sum: "$out" }}}]).exec(function (err, trans) {
                totalrecieved=trans.totalRecieved;
                //totalrecieved=41;
                totalissued=trans.totalIssued;
                //totalissued=11;
            });
            var net=totalrecieved-totalissued;
            ball.in=totalrecieved;
            ball.out=totalissued;
            ball.balance=net
            ball.save();
        }
        res.json(balances);
    })*/
    Balance.find().exec(function (err, balances) {
        var rst={};
        var crs;
        var n = balances.length;
        for (var i = 1; i < 2; i++) {
            var ball = balances[i];
            var productname=ball.productName;
            var totalrecieved=9;
            var totalissued=4;
            crs=Transaction.aggregate([{$match: { productName: productname }},{$group: {productName: "$productName",totalRecieved: { $sum: "$in" },totalIssued: { $sum: "$out" }}}]);
            //rst.result=trans;
           /* var net=totalrecieved-totalissued;
            ball.in=totalrecieved;
            ball.out=totalissued;
            ball.balance=net
            ball.save();*/
        }
        res.json(crs);
    })
   
}