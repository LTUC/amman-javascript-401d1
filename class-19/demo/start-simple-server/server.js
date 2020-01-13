'use strict';

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('Connected', socket.id);
  socket.on('speak', (payload) => {
    console.log('.');
    socket.broadcast.emit('message', payload);
  });
  
});
