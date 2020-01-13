'use strict';

const io = require('socket.io')(3000);

// Core Demo -- basic operations
io.on('connection', (socket) => {
  console.log('CORE', socket.id);
  socket.on('speak', (payload) => {
    io.emit('message', payload);
  });
});

// Built after the core demo, to show namespaces and rooms


const school = io.of('/school');
school.on('connection', (socket) => {
  console.log('SCHOOL', socket.id);
  socket.on('speak', (payload) => {
    school.emit('message', payload);
  });

  socket.on('challenge', (payload) => {
    school.to('codefellows').emit('challenge', payload);
  });

  socket.on('join', room => {
    console.log('joined', room);
    socket.join(room);
  });

});

const home = io.of('/home');
home.on('connection', (socket) => {
  console.log('HOME', socket.id);
  socket.on('speak', (payload) => {
    home.emit('message', payload);
  });
});
