var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = require('./config.js');

MongoClient.connect(url, function(err, db){
  if(err){
    console.log('Unable to connect to Database');
    db.close();
  } 
  
  if(db){
    var collection = db.collection('testCollection');
    var testObj = {
      name: 'test',
      url: 'test2',
    }
    collection.insert(testObj, function(err, data){
      if(err){
        console.log('Broken');
        throw err;
      }
      console.log('Insert of ' + JSON.stringify(testObj) + ' was successful');
    });
  }
  
  
  
  
  // Close Connection
  db.close();
});