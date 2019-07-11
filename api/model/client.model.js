const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Product
let Client = new Schema({
  clientID: {
    type: String
  },
  clientName: {
    type: String
  },
  contactPerson: {
    type: String
  },
  email: {
    type: String
  },
  clientType: {
    type: String
  },
  address: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  active: {
    type: Boolean
  }
},{
    collection: 'clients'
});
module.exports = mongoose.model('Client', Client);
