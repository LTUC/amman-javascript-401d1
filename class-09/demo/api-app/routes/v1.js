'use strict';

const express = require('express');
const router = express.Router();

const teams = require('../models/teams.js');
const players = require('../models/players.js');

function getModel(req, res, next) {
  let model = req.params.model;

  switch(model) {
    case "teams":
      req.model = teams;
      next();
      return;
    case "players":
      req.model = players;
      next();
      return;
    default:
      next('invalid model');
      return;
  }
}

router.param('model', getModel);

router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);
router.get('/api/v1/:model/:id', handleGetOne)

function handleGetAll(req, res, next) {
  req.model.get()
    .then(results => {
      console.log('******** results: *********', results);
      let count = results.length;
      res.json({ count, results });
    })
}

function handleGetOne(req, res, next) {
  let id = req.params.id;
  req.model.get(id)
    .then(record => {
      res.json(record)
    }).catch(next);
}

function handlePost(req, res, next) {
  req.model.post(req.body)
    .then(results => {
      res.json(results);
    }).catch(next);
}

module.exports = router;