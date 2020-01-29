'use strict';

class DataModel {
  constructor(schema) {
    this.schema = schema;
  }

  get(id) {
    if (id) {
      return this.schema.findById(id);
    } else {
      return this.schema.find({});
    }
  }

  post(record) {
    let item = new this.schema(record);
    return item.save();
  }
}

module.exports = DataModel;