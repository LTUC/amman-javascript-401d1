'use strict';

const express = require('express');
const authRouter = express.Router();

const users = require('./users.js');
const basicAuth = require('./basic-auth-middleware.js');
const oauth = require('./oauth/github.js');

// echo '{"username":"john","password":"foo"}' | http post :3000/signup
authRouter.post('/signup', async (req, res) => {

  try {
    let user = await users.save(req.body);
    let token = users.generateToken(user);
    res.status(200).send(token);
  } catch (e) {
    res.status(403).send("Error Creating User");
  }

});

// http post :3000/signin -a john:foo
authRouter.post('/signin', basicAuth, (req, res) => {
  res.status(200).send(req.token);
});

// Used as redirect by the oauth provider
authRouter.get('/oauth', oauth, (req, res) => {
  res.status(200).send(req.token);
});

// Will not work unless you send username/password as Basic
authRouter.get('/users', basicAuth, (req, res) => {
  res.status(200).json(users.list());
});

module.exports = authRouter;
