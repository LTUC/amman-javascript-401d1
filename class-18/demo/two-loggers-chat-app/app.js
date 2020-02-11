'use strict';

const sio = require('socket.io-client');
const faker = require('faker');

const client = sio.connect('http://localhost:3001');
const ltuc = sio.connect('http://localhost:3001/ltuc');


setInterval(() => {
    client.emit('speak', faker.hacker.phrase());
}, 2000);

setInterval(() => {
    ltuc.emit('ltuc-speak', faker.hacker.phrase());
}, 500);