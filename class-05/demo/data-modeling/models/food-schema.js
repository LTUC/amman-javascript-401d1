'use strict';

const mongoose = require('mongoose');

const food = mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  type: { type: String, uppercase: true, enum: ['FRUIT', 'VEGETABLE', 'PROTIEN'] },
});

// Runs any time we run the .findOne() method
food.post('findOne', function (doc) {
  // doc.name = doc.name.toUpperCase();
});

// Runs any time we create a new record instance
food.post('init', function () {
  // console.log(this);
});

// Runs after we save (we can also run pre('save') as well ...)
food.post('save', function () {
  // console.log('saving', this);
});

module.exports = mongoose.model('food', food);
