'use strict';

const Q = require('@nmq/q/server');
Q.start();

const database = new Q('database');
database.monitorEvent('create');
database.monitorEvent('update');
database.monitorEvent('delete');
database.monitorEvent('error');
