const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Transaction
let Transaction = new Schema({
  transDate: {
     type: Date,
  },
  productID: {
    type: String
  },
  productName: {
    type: String
  },
  clientID: {
    type: String
  },
  clientName: {
    type: String
  },
  in: {
    type: Number
  },
  out: {
    type: Number
  },
},{
    collection: 'transactions'
});
module.exports = mongoose.model('Transaction', Transaction);