'use strict';

const PORT = process.env.PORT || 3002;

const sio = require('socket.io')(PORT);

sio.on('connection', socket => {
    console.log('connected with id', socket.id);
    // console.log('socket', socket);

    socket.on('speak', payload => {
        // console.log(payload['data']);
        console.log(payload);
    });
    socket.on('disconnected', () => {
        console.log(socket.id);
    });

    
});