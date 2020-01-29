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

}

function handleGetOne(req, res, next) {

}

function handlePost(req, res, next) {
  
}