var newUrl = function(input){
  var shortId = require('shortid');
  var mongodb = require('mongodb');
  var MongoClient = mongodb.MongoClient;
  var url = require('./config.js');
  //Pulls Credentials and DB URL

  MongoClient.connect(url, function(err, db){
    if(err){
      console.log('Unable to connect to Database');
      db.close();
      return err;
    } 

    if(db){
      var collection = db.collection('testCollection');
      //Store collection w/ lookup IDs and redirect URLs in var collection
      
      //Need to add technique for maining unique lookup IDs
      var testObj = {
        _id: shortId.generate(),
        url: input
      }
      //Change lookup: to store unique lookupid
      
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