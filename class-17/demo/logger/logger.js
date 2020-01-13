'use strict';

const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => { });

client.on('data', function (data) {
  let event = JSON.parse(data);
  // Only log certain events
  // if (event.event === "create") { console.log(event.payload); }
  console.log(event.payload);
});

client.on('close', function () {
  console.log('Connection closed');
});
