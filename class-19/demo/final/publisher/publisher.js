'use strict';

const Q = require('@nmq/q/client');

Q.publish('database', 'delete', {id:77});
Q.publish('database', 'create', {id:99,name:'John'});
Q.publish('network', 'attack', {type: 'DDOS',source:'Russia'});
