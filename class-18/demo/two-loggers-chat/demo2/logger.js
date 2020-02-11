'use strict';

const sio = require('socket.io-client');

const logger = sio.connect('http://localhost:3001');


logger.on('message', payload => {
    console.log('heard your message: ', payload);
});

