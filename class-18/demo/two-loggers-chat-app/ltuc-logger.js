'use strict';

const sio = require('socket.io-client');

const ltuc = sio.connect('http://localhost:3001/ltuc');

ltuc.on('message', payload => {
    console.log('LTUC message: ', payload);
});