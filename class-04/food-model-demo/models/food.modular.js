'use strict';

const Collection = require('../collection.js');
const FoodModel = require('./food.model.js');

class Food extends Collection {
  constructor() {
    super(FoodModel);
  }
}

module.exports = Food;