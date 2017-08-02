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
      var target = '';
      console.log('working');
      db.collection('testCollection').find({_id: "HJG81OyD-"}).toArray(function(err, data){
                                                        if(err){console.log('broken')}
                                                          target = data[url];
                                                        });
      db.close();
    }
  });
}

redirect();



