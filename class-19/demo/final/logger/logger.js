'use strict';

const Q = require('@nmq/q/client');

const db = new Q('database');
const logger = new Q('network');

db.subscribe('delete', (payload) => {
  console.log('delete happened', payload);
});

db.subscribe('create', (payload) => {
  console.log('create happened', payload);
});

logger.subscribe('attack', (payload) => {
  console.log('RUN!');
});

logger.subscribe('foo', (payload) => {
  console.log('BAR!');
});

console.log(db.subscriptions());
