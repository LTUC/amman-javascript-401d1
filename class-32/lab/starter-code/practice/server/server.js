const PORT = process.env.PORT || 3000;

const io = require('socket.io')(PORT);

io.on('connection', socket => {

  console.log('socket.io connection', socket.id);

  socket.on('words', (payload) => {
    io.emit('incoming', payload);
  });

});


/// ALSO, do a q server on 3333...
const Q = require('@nmq/q/server');
Q.start();

const chat = new Q('deeds');
chat.monitorEvent('work');



