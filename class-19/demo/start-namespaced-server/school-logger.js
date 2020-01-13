// CLIENT
const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000/school');

socket.on('message', (payload) => {
  console.log('heard', payload);
});

socket.on('challenge', (payload) => {
  console.log('challenge', payload);
});

