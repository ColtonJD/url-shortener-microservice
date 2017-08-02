var redirect = function(){
  var mongodb = require('mongodb');
  var MongoClient = mongodb.MongoClient;
  var url = require('./config.js');
  //Pulls Credentials and DB URL

  MongoClient.connect(url, function(err, db){
    if(err){
      console.log('Unable to connect to Database');
      db.close();
    } else{
      console.log('working');
      var record = db.collection('testCollection').find({url: 'test'}, function(err, data){
                                                        if(err){console.log('broken'); }
                                                        }).toArray();
      console.log(record);
      db.close();
    }
  });
}

redirect();



