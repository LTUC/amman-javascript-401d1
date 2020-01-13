'use strict';

const events = require('./events.js');

events.on('save', payload => log('save', payload));
events.on('delete', payload => log('delete', payload));
events.on('update', payload => log('update', payload));
events.on('cache-update', payload => log('cache-update', payload));

function log(event,payload) {
  let time = new Date();
  console.log({event, time, payload});
}