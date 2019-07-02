const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Product
let Product = new Schema({
  productid: {
    type: String
  },
  productname: {
    type: String
  },
  reorderlevel: {
    type: Number
  },
  active: {
    type: Boolean
  }
},{
    collection: 'products'
});
module.exports = mongoose.model('Product', Product);
