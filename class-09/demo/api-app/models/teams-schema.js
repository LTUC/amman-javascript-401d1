'use strict';

const mongoose = require('mongoose');
require('./players-schema.js');

const teamsSchema = mongoose.Schema({
    name: { type: String, required: true }
}, { toObject: { virtuals: true }, toJSON: { virtuals: true }});

teamsSchema.virtual('actualPlayers', {
  ref: 'players',
  localField: 'name',
  foreignField: 'team',
  justOne: false
});

teamsSchema.pre('findOne', function() {
  try {
    this.populate('actualPlayers');
  } catch(e) {
    console.error(e);
  }
});

module.exports = mongoose.model('teams', teamsSchema);