'use strict';

const teamSchema = require('./teams-schema.js');
const dataModel = require('./model.js');

class Teams extends dataModel { }


module.exports = new Teams(teamSchema);