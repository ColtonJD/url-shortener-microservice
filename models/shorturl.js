const mongoose = require('mongoose');
//Standard Record Format 
const schema = new mongoose.Schema({
  originalUrl: String,
  short: String
});

//Define collection for use and schema
const model = mongoose.model('shortUrls', schema);

module.exports = model; 