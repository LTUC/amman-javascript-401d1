'use strict';

const uuid = require('uuid/v4');

const schema = {
  id: { required: true },
  name: { required: true },
  calories: { required: true }
}

class Food {
  constructor(record) {
    record.id = uuid();

    if (this.isValid(record)) { return record }
    else { return undefined };
  }

  isValid(data) {
    return true;
  }
}

module.exports = Food;