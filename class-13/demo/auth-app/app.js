'use strict';

const express = require('express');
const basicAuth = require('./basic-auth-middleware.js');
const users = require('./users.js');
const oauth = require('./oauth-middleware.js');
const bearerAuth = require('./bearer-auth-middleware.js');

const app = express();

app.use(express.json());
app.use(express.static('./public'));

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

app.get('/oauth', oauth, (req, res) => {
  res.status(200).send(req.token);
});

app.get('/user', bearerAuth, (req, res) => {
  res.status(200).json(req.user);
});

app.get('/profile', bearerAuth, (req, res) => {
  res.render('./public/dashboard.html')
});

app.listen(3000, () => console.log('server up'));