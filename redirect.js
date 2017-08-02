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
      var target = db.collection('testCollection').find({_id: "HJG81OyD-"}, {_id: 0, url: 1}).toString(function(err, data){
        if(err){return err}
        console.log(data);
      });
    }
    db.close();
  });
}

redirect();



