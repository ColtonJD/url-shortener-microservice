// server.js

// init project
var express = require('express');
var app = express();
var newUrl = require('./newUrl.js');
//For creating new shortened URLs
var redirect = require('./redirect.js');
//For redirecting shortened URLs

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/new/:input', function (req, res){
  //Create new shortened URL
  //Need to create either an interface that validates URLs and cleans them or a way to clean URLs
  //Consider blowing this up and replacing w/ a form on home page. 
  var input = req.params.input;
  var result = newUrl(input);
  res.end(result);
});

app.get('/id/:id', function (req, res){
  //Redirect using shortened URl
  return res.end(redirect(req.params.id));
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
