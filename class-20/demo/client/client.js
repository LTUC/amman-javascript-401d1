// CLIENT

const io = require('socket.io-client');

const server = 'http://localhost:3333';

const socket = io.connect(server);

socket.emit('speak', 'Hello World');

socket.on('message', (payload) => {
  console.log('heard', payload);
});


