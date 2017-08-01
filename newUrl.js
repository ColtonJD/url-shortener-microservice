var newUrl = function(newUrl){
  var mongodb = require('mongodb');
  var MongoClient = mongodb.MongoClient;
  var url = require('./config.js');
  var success = null;

  MongoClient.connect(url, function(err, db){
    if(err){
      console.log('Unable to connect to Database');
      db.close();
    } 

    if(db && newUrl){
      var collection = db.collection('testCollection');
      var testObj = {
        lookup: 1,
        url: newUrl,
      }
      collection.insert(testObj, function(err, data){
        if(err){
          console.log('Broken');
          throw err;
          return 'Error';
        }
        console.log('Insert of ' + JSON.stringify(testObj) + ' was successful');
        return 'Success';
      });
    }




    // Close Connection
    db.close();
  });
}

module.exports = newUrl;