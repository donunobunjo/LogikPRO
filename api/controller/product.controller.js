const Product = require('../model/product.model');
const Balance = require('../model/balance.model');
//Create Product
exports.createProduct = function (req, res) {
    //let product = new Product(req.body);
    let product = new Product();
    let balance = new Balance();
    product.productid = req.body.productid;
    product.productname = req.body.productname.toUpperCase();
    product.reorderlevel = req.body.reorderlevel;
    product.active = req.body.active;
    balance.reorderlevel=req.body.reorderlevel;
    balance.productName = req.body.productname.toUpperCase();
    balance.in=0;
    balance.out=0;
    balance.balance=0;
    balance.save();
    product.save()
       .then(() => {
          res.json(product);
       })
       .catch(() => {
         res.status(400).send("unable to save to database");
       });
};
//Delete Product
exports.deleteProduct = function (req, res) {
  Product.findByIdAndRemove({_id: req.params.id}, function(err){
    if(err){ 
      res.json(err);
    }
    else {
      res.json('Successfully removed');
    }
  })
};
 
//Update product
exports.updateProduct = function(req, res){
  Product.findById(req.params.id, function(err, product) {
    if (!product)
      res.status(404).send("data is not found");
    else {
        product.productid = req.body.productid;
        product.productname = req.body.productname.toUpperCase();
        product.reorderlevel = req.body.reorderlevel;
        product.active = req.body.active;
        product.save().then(() => {
        res.json(product);
      })
      .catch(() => {
            res.status(400).send("unable to update the database");
      });
    }
  });
}
//Search product
exports.searchProduct = function(req, res){
   //res.json({msg:"hello"})
   Product.find().sort({ productname: 1 }).exec(function (err, products) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(products);
    }
  });
}

