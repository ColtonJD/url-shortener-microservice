var newUrl = function(input){
  var mongodb = require('mongodb');
  var MongoClient = mongodb.MongoClient;
  var url = require('./config.js');

  MongoClient.connect(url, function(err, db){
    if(err){
      console.log('Unable to connect to Database');
      db.close();
      return err;
    } 

    if(db){
      var collection = db.collection('testCollection');
      
      var testObj = {
        lookup: 1,
        url: input,
      }
      
      collection.insert(testObj, function(err, data){
        if(err){
          console.log('Broken');
          db.close();
          throw err;
          return err;
        }
        console.log('Insert of ' + JSON.stringify(testObj) + ' was successful');
        db.close();
        return 'Success';
      });
    }
  });
}

module.exports = newUrl;