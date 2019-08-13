const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Transaction
let Balance = new Schema({
  productName: {
    type: String
  },
  in: {
    type: Number
  },
  out: {
    type: Number
  },
  balance: {
    type: Number
  },
  reorderlevel: {
    type: Number
  },
},{
    collection: 'balances'
});
module.exports = mongoose.model('Balance', Balance);