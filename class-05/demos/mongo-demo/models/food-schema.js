'use strict';

const mongoose = require('mongoose');

const food = mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  type: { type: String, required: true, uppercase: true, enum: ['FRUIT', 'VEGETABLE', 'FASTFOOD'] }
});

module.exports = mongoose.model('food', food);