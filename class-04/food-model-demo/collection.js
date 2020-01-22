'use strict';

const uuid = require('uuid/v4');

class Collection {

  constructor(Model) {
    this.database = [];
    this.model = Model;
  }

    get(id) {
      let response = id ? this.database.filter((record) => record.id === id) : this.database;
      return Promise.resolve(response);
    }

    create(record) {
      let item = new this.model(record);

      if (item) {
        this.database.push(item);
        return Promise.resolve(item);
      } else {
        return Promise.reject('invalid item or record');
      }
    }

    update(id, record) {
      this.database = this.database.map(item => (item.id === id) ? record : item);
      return Promise.resolve(record);
    }

    delete(id) {
      this.database = this.database.filter(record => record.id === id);
      Promise.resolve();
    }
}

module.exports = Collection;