'use strict';
const server = require('./lib/server.js');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}

mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

server.start(process.env.PORT);