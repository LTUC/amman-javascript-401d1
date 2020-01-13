'use strict';

const DataModel = require('../model.js');

class Food extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: { required: true },
      name: { required: true },
      calories: { required: true },
    };
  }
}

module.exports = Food;