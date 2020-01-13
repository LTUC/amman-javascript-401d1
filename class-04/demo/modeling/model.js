'use strict';

const uuid = require('uuid/v4');

class Model {

  constructor() {
    this.database = [];
  }

  get(id) {
    let response = id ? this.database.filter((record) => record.id === id) : this.database;
    return Promise.resolve(response);
  }

  create(record) {
    record.id = uuid();
    if (this.sanitize(record)) {
      this.database.push(record);
      return Promise.resolve(record);
    }
    else {
      return Promise.reject('Invalid Record');
    }
  }

  update(id, record) {

    if (this.sanitize(record)) {
      this.database = this.database.map((item) => (item.id === id) ? record : item);
      return Promise.resolve(record);
    }
    else {
      return Promise.reject('Invalid Record');
    }
  }

  delete(id) {
    this.database = this.database.filter((record) => record.id !== id);
    return Promise.resolve();
  }

  sanitize(entry) {

    return Object.keys(schema).every(field => {
      if (schema[field].required && !entry[field]) { return false; }
      else { return true; }
    });

  }

}

module.exports = Model;