const express = require('express');
const app = express();
const mongoose = require('mongoose');
//Pull db url and credentials from external 
const dbUrl = require('./config.js');

mongoose.connect(dbUrl);