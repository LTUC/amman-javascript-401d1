'use strict';

const express = require('express');

const food = require('../models/food/food-model.js');

const router = express.Router();

router.get('/food', getFood);
router.post('/food', postFood);

function getFood(req, res, next) {
  food.get()
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}

function postFood(req, res, next) {
  food.create(req.body)
    .then(data => {
      console.log('req body:', data);
      res.status(201).json(data);
    })
}

module.exports = router;