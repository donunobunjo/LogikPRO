const Product = require('../model/product.model');
//Create Product
exports.createProduct = function (req, res) {
    let product = new Product(req.body);
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
        product.productname = req.body.productname;
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

