'use strict';

const mongoose = require('mongoose');
const Food = require('./models/food-schema.js');

const MONGOOSE_URI = 'mongodb://localhost:27017/luminous-mongo-demo';

mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true });

const apple = new Food({ name: 'apple', type: 'FRUIT', calories: 500 });

apple.save();