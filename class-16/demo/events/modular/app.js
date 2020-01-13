'use strict';

const events = require('./events.js');

require('./logger.js');
require('./cache.js');

events.emit('save', {id:77});
