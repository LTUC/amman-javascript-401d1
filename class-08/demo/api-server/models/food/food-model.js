'use strict';

const schema = require('./food-schema.js');
const Model = require('../mongo.js');

class Food extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = new Food();