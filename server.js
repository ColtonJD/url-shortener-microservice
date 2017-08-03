const express = require('express');
const app = express();
const mongoose = require('mongoose');
//Pull db url and credentials from external config.js file
const dbUrl = require('./config.js');
//Pull mongoose model
const model = require('./models/shorturl.js');


//Get connected
mongoose.connect(dbUrl);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) =>{
  
});

app.get('/new/:urlToShorten', (req, res, next)=>{
  
});

app.get('/:shortForRedirect', (req, res, next)=>{
  
});