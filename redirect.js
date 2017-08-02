var redirect = function(){
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
      var target;
      db.collection('testCollection', function(err, collection){
        collection.find({_id: "HJG81OyD-"}, {_id: 0, url: 1}, function(err, data){}).limit(1);
      });
      console.log(target);
    }
    db.close();
  });
}

redirect();



