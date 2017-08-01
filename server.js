// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var newUrl = require('./new-url.js');
var redirect = require('./redirect.js');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/new/:url', function (req, res){
  var url = req.params.url;
  newUrl(url);
});

app.get('/id/:id', function (req, res){
  var id = req.params.id;
  redirect(id);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
