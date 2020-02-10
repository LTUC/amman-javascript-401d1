'use strict';

const net = require('net');
const PORT = process.env.PORT || 3001;
const server = net.createServer();

let socketPool = {};

server.on('connection', (socket) => {
  const id = `Socket-${Math.random()}`;
  socketPool[id] = socket;
  socket.on('data', (buffer) => dispatchEvent(buffer));
  socket.on('end', () => delete socketPool[id]);
  socket.on('error', (e) => console.error('Socket ERR:', e));
});

function dispatchEvent(buffer) {
  let message = JSON.parse(buffer.toString().trim());
  broadcast(message);
}

function broadcast(message) {
  let payload = JSON.stringify(message);
  for (let socket in socketPool) {
    socketPool[socket].write(payload);
  }
}

server.listen(PORT, () => {
  console.log(`listening on the coolest port: ${PORT}`);
});