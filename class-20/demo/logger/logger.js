'use strict';

require('dotenv').config();
const Q = require('@nmq/q/client');

const database = new Q('database');

database.subscribe('create', (payload) => {
  console.log('CREATE', payload);
});

database.subscribe('update', (payload) => {
  console.log('UPDATE', payload);
});

database.subscribe('delete', (payload) => {
  console.log('DELETE', payload);
});

database.subscribe('error', (payload) => {
  console.error(payload);
});
