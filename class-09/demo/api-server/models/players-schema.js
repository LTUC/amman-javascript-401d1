'use strict';

const mongoose = require('mongoose');
require('./teams-schema.js');

const players = mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, uppercase: true, enum: ['P', 'C', '1B', '2B', 'SS', '3B', 'RF', 'LF', 'CF'] },
  throws: { type: String, uppercase: true, enum: ['R', 'L'] },
  bats: { type: String, uppercase: true, enum: ['R', 'L'] },
  team: { type: String, required: true },
}, { toObject: { virtuals: true }, toJSON: { virtuals: true } });

players.virtual('actualTeam', {
  ref: 'teams',
  localField: 'team',
  foreignField: 'name',
  justOne: false,
});

players.pre('findOne', function () {
  try {
    this.populate('actualTeam');
  } catch (e) { console.error('find error', e); }
});


module.exports = mongoose.model('players', players);
