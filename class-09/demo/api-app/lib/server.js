'use strict';

// 3rd party dependencies
const express = require('express');
const morgan = require('morgan');

// custom middleware
// this is where your error handling middleware goes

// custom routes
const apiRouter = require('../routes/v1.js');

// application constants
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(apiRouter);

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3333;
    app.listen(PORT, () => console.log('server up:', PORT));
  }
}