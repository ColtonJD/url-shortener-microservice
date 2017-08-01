var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var credentials = require('./credentials.js');
var url = credentials();

MongoClient.connect(url, function(err, db){
  if(err){
    console.log('Unable to connect to Database');
  } else{
    console.log('Connection establish to, ' + url);
  }
  
  // Do stuff //
  
  // Close Connection
  db.close();
});