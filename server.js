// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var newUrl = require('./newUrl.js');
var redirect = require('./redirect.js');
var test = require('./test.js');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/new/:input', function (req, res){
  var input = req.params.input;
  var result = newUrl(input);
  res.end(result);
});

app.get('/test', function (req, res){
  var result = test("Working?");
  res.end(result);
});

app.get('/id/:id', function (req, res){
  var id = req.params.id;
  redirect(id);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
