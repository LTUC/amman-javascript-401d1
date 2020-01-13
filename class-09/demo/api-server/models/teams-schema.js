'use strict';

const mongoose = require('mongoose');
require('./players-schema.js');

const teams = mongoose.Schema({
  name: { type: String, required: true },
}, { toObject: { virtuals: true }, toJSON: { virtuals: true } });

teams.virtual('players', {
  ref: 'players',
  localField: 'name',
  foreignField: 'team',
  justOne: false,
});

teams.pre('findOne', function () {
  try {
    this.populate('players');
  }
  catch (e) { console.log('Find Error', e); }
});

module.exports = mongoose.model('teams', teams);
