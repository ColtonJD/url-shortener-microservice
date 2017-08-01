var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = require('./config.js');

var newUrl = function(newUrl){
  return newUrl;
}

MongoClient.connect(url, function(err, db){
  if(err){
    console.log('Unable to connect to Database');
    db.close();
  } 
  
  if(db){
    var collection = db.collection('testCollection');
    var testObj = {
      lookup: 1,
      url: newUrl,
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