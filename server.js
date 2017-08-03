const express = require('express');
const app = express();
const mongoose = require('mongoose');
//Pull db url and credentials from external config.js file
const dbUrl = require('./config.js');
//Pull mongoose model
const dbModel = require('./models/shorturl.js');


//Get connected
mongoose.connect(dbUrl);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) =>{
  
});

app.get('/new/:urlToShorten', (req, res, next)=>{
  const {urlToShorten} = req.params;
  const validUrlTest =  /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  if(validUrlTest.test(urlToShorten) === true){
    
  }
});

app.get('/:shortForRedirect', (req, res, next)=>{
  res.end('Working');
});

app.listen(process.env.PORT, ()=>{
  console.log("Connected on port: " + process.env.PORT);
});