const express = require('express');
const productRoutes = express.Router();
// Require product model in our routes module
let Product = require('../model/product.model');
// Defined store route
productRoutes.route('/add').post(function (req, res) {
  let product = new Product(req.body);
 // product.productid = req.body.productid;
 // product.productname = req.body.productname;
 // product.reorderlevel = req.body.reorderlevel;
 // product.active = req.body.active;
  product.save()
    .then(() => {
      //res.status(200).json({'business': 'business in added successfully'});
      res.json(product);
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});
// Defined get data(index or listing) route
productRoutes.route('/').get(function (req, res) {
    Product.find(function(err, products){
    if(err){
      res.json(err);
    }
    else {
      res.json(products);
    }
  });
});
// Defined edit route
productRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Product.findById(id, function (err, product){
      if(err) {
        res.json(err);
      }
      res.json(product);
  });
});
//  Defined update route
productRoutes.route('/update/:id').post(function (req, res) {
    Product.findById(req.params.id, function(err, product) {
    if (!product)
      res.status(404).send("data is not found");
    else {
        product.productid = req.body.productid;
        product.productname = req.body.productname;
        product.reorderlevel = req.body.reorderlevel;
        product.active = req.body.active;
        product.save().then(() => {
        //res.json('Update complete');
        res.json(product);
      })
      .catch(() => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
productRoutes.route('/delete/:id').delete(function (req, res) {
    Product.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});
module.exports = productRoutes;
