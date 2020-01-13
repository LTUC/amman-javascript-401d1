'use strict';

const schema = require('./players-schema.js');
const dataModel = require('./model.js');

class Players extends dataModel { }


module.exports = new Players(schema);