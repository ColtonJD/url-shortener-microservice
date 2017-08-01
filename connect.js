var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://urlBot:jpL5g8BCquj3@ds129023.mlab.com:29023/url-shortener-microservice-cj';

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