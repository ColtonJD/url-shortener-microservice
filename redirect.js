var redirect = function(lookup){
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = require('./config.js');

MongoClient.connect(url, function(err, db){
  if(err){
    console.log('Unable to connect to Database');
    db.close();
  } 
  
  if(db){
    db.collection('testCollection').find(
      {name: 'test3'}).toArray(function(err, documents){
      if(err){return err}
      console.log(documents);
    });
    }
  // Close Connection
  db.close();
});
}