const express = require('express');
const app = express();
const mongoose = require('mongoose');
//Pull db url and credentials from external config.js file
const dbUrl = require('./config.js');
//Pull mongoose model
const shortUrl = require('./models/shorturl.js');
//Shortid module is used to generate unique shortIDs for shortened URLS
const shortid = require('shortid');


//Get connected
mongoose.connect(dbUrl);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) =>{
  
});

app.get('/new/:urlToShorten', (req, res, next)=>{
  const {urlToShorten} = req.params;
  //Reg Ex for validating URLs
  const validUrlTest =  /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  if(validUrlTest.test(urlToShorten) === true){
    const insertObj = new shortUrl({
      url: urlToShorten,
      short: shortid.generate()
    });
    insertObj.save((err)=>{
      if(err){
        console.log(err);
        res.end('There was an error creating your short URL');
      } else{
        //
        res.end('Success! Your new short url is: https://url-shortener-microservice-cj.glitch.me/' + insertObj.short)
      }
    });
  }else{
    res.end(urlToShorten + 'is not a valid URL. Please return to home and try again.')
  }
});

app.get('/:shortForRedirect', (req, res, next)=>{
  const { shortForRedirect } = req.params;
  const urlPrefixTest = 
});

app.listen(process.env.PORT, ()=>{
  console.log("Connected on port: " + process.env.PORT);
});