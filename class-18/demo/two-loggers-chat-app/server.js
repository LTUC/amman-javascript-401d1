'use strict';

const sio = require('socket.io')(3001);

sio.on('connection', socket => {
    console.log('connected on: ', socket.id);
    socket.on('speak', payload => {
        sio.emit('message', payload);
    });
});

const ltuc = sio.of('/ltuc');
ltuc.on('connection', socket => {
    socket.on('ltuc-speak', payload => {
        ltuc.emit('message', payload);
    });
});
