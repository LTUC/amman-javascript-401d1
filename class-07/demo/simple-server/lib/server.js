'use strict';

const express = require('express');
const app = express();
const logRequest = require('./logger.js');

app.use(express.json());
app.use(logRequest);

// basic routing

app.get('/fruit', (req, res) => {
  console.log('request obj:', req.query);

  let output = {
    type: req.query.type,
    thisWorked: true
  }
  res.status(200).json(output);
});

app.post('/fruit', (req, res) => {
  console.log('request body:', req.body);
  res.status(201).send('item added');
});

// middleware

function square(n) {
  return (req, res, next) => {
    if (typeof n !== 'number') {
      next('not a number');
    } else {
      req.number = n * n;
      next();
    }
  }
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.statusMessage = 'Generic Server Error!';
  res.json({ error: err });
}

function notFoundHandler(req, res, next) {
  res.status(404);
  res.statusMessage = 'Not Found!';
  res.json({ error: 'Not Found'});
}

app.get('/mw', square(10), (req, res) => {
  let output = {
    number: req.number
  }

  res.status(200).json(output);
});

app.get('/bad-math', square('some string'), (req, res) => {
  let output = {
    number: req.number
  }

  res.status(200).json(output);
});

app.get('/real-error', (req, res) => {
  throw new Error('my first real error');
});

// API routes
let db = [];

app.get('/api/v1/food', (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results });
});

app.get('/api/v1/food/:id', (req, res, next) => {
  // example of request http://localhost:3000/api/v1/food/23
  // request.params === ['23']
  // request.params.id === '23'

  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record);
});

app.post('/api/v1/food',(req, res, next) => {
  let { name } = req.body; // req.body.name
  let record = { name };
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
});

app.put('/api/v1/food/:id', (req, res, next) => {
  let idToUpdate = req.params.id;
  let { name, id } = req.body;
  let updatedRecord = { name, id };
  db = db.map((record) => (record.id === parseInt(idToUpdate)) ? updatedRecord : record);
  res.json(updatedRecord);
});

app.delete('/api/v1/food/:id', (req, res, next) => {
  let id = req.params.id;
  db = db.filter((record) => record.id !== parseInt(id));
  res.json({ msg: 'item deleted' });
});

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`listening on ${PORT}`));
  }
}