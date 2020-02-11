'use strict';

const sio = require('socket.io-client');
const client = sio.connect('http://localhost:3002');

let num = 0;
setInterval(() => {
    client.emit('speak', num++);
}, 500);
