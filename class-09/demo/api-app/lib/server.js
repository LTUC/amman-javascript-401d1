'use strict';

// 3rd party dependencies
const express = require('express');
const morgan = require('morgan');

// custom middleware

// custom routes

// application constants
const app = express();

app.use(express.json());
app.use(morgan('dev'));

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3333;
    app.listen(PORT, () => console.log('server up:', PORT));
  }
}