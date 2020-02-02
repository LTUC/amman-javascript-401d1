'use strict';

const express = require('express');
const basicAuth = require('./basic-auth-middleware.js');
const users = require('./users.js');

const app = express();

app.use(express.json());

app.post('/signup', (req, res) => {
  users.save(req.body)
    .then(user => {
      let token = users.generateToken(user);
      res.status(200).send(token);
    })
});

app.post('/signin', basicAuth, (req, res) => {
  res.status(200).send(req.token);
});

app.get('/users', basicAuth, (req, res) => {
  res.status(200).json(users.list());
});

app.listen(3000, () => console.log('server up'));