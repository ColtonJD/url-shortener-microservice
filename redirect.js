var redirect = function(input){
  var mongodb = require('mongodb');
  var MongoClient = mongodb.MongoClient;
  var url = require('./config.js');
  //Pulls Credentials and DB URL

  MongoClient.connect(url, function(err, db){
    if(err){
      console.log('Unable to connect to Database');
      return err;
    } else{
      console.log('working');
      db.collection('testCollection', function(err, collection){
        if(err){return err}
        collection.find({_id: 'HJG81OyD-'}, {_id: 0, url: 1}).limit(1).toArray(function (err, data){
          var obj = data[0];
          var target = obj.url;
          console.log(target);
        });
      });
    }
    db.close();
  });
}
module.exports = redirect;



