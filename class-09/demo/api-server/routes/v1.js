'use strict';

const express = require('express');
const router = express.Router();

const teams = require('../models/teams.js');
const players = require('../models/players.js');

// What we want is that /api/v1/<model>/ ends up using the right module from the models folder
// Let the class lead the "how" discussion and land on a simplistic solution like this one
// Lab will be for them to make this 100% dynamic and safe
function getModel(req, res, next) {
  let model = req.params.model; // This will be teams, players, whatever is after /api/v1

  // How can we get the right model into those functions?
  // Well,l middleware is really good at letting us put data on the request object
  // Lets do that and then get get ourselves back into the route handler
  switch (model) {
    case "teams":
      req.model = teams;
      next();
      return;
    case "players":
      req.model = players;
      next();
      return;
    default:
      next("Invalid Model");
      return;
  }
}

router.param('model', getModel);

// Route Definitions
router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);
router.get('/api/v1/:model/:id', handleGetOne);

// Route Handlers
function handleGetAll(req, res, next) {
  req.model.get()
    .then(results => {
      let count = results.length;
      res.json({ count, results });
    })
    .catch(next);
}

function handleGetOne(req, res, next) {
  let id = req.params.id;
  req.model.get(id)
    .then(record => res.json(record))
    .catch(next);
}

function handlePost(req, res, next) {
  req.model.post(req.body)
    .then(result => res.json(result))
    .catch(next);
}


module.exports = router;
