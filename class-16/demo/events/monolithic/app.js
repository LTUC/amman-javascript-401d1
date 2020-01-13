'use strict';

const EE = require('events');

const events = new EE();

events.on('save', handleSave);
events.on('delete', payload => log('delete', payload));
events.on('update', payload => log('update', payload));
events.on('cache-update', payload => log('cache-update', payload));

function handleSave(payload) {
  console.log(`Record ${payload.id} was saved`);
  // Emit another event ...
  events.emit('cache-update', {id:payload.id});
}

function log(event,payload) {
  let time = new Date();
  console.log({event, time, payload});
}

events.emit('update', {id:77});
events.emit('delete', {id:77});
events.emit('save', {id:77});
