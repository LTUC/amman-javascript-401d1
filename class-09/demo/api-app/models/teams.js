'use strict';

const schema = require('team-schema.js');
const dataModel = require('./model.js');

class Teams extends dataModel {};

module.exports = new Teams(schema);