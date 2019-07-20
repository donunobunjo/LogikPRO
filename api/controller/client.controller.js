const Client = require('../model/client.model');
//Create client
exports.createClient = function (req, res) {
    let client = new Client();
    client.clientID=req.body.clientID;
    client.clientName=req.body.clientName.toUpperCase();
    client.contactPerson=req.body.contactPerson;
    client.email=req.body.email;
    client.clientType=req.body.clientType;
    client.address=req.body.address;
    client.phoneNumber=req.body.phoneNumber;
    client.active=req.body.active;
    client.save()
       .then(() => {
          res.json(client);
       })
       .catch(() => {
         res.status(400).send("unable to save to database");
       });
 // res.json({msg:"Hello world"});
};
//Delete client
exports.deleteClient = function (req, res) {
  Client.findByIdAndRemove({_id: req.params.id}, function(err){
    if(err){ 
      res.json(err);
    }
    else {
      res.json('Successfully removed');
    }
  })
};
 
//Update client
exports.updateClient = function(req, res){
  Client.findById(req.params.id, function(err, client) {
    if (!client)
      res.status(404).send("data is not found");
    else {
        client.clientID=req.body.clientID;
        client.clientName=req.body.clientName.toUpperCase();
        client.contactPerson=req.body.contactPerson;
        client.email=req.body.email;
        client.clientType=req.body.clientType;
        client.address=req.body.address;
        client.phoneNumber=req.body.phoneNumber;
        client.active=req.body.active;
        client.save().then(() => {
        res.json(client);
      })
      .catch(() => {
            res.status(400).send("unable to update the database");
      });
    }
  });
}

