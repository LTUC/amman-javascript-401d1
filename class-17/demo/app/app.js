'use strict';

const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => { });

function sendEvent(quit) {
  const events = ['create', 'foo', 'read', 'baz', 'update', 'bing', 'rain', 'attack', 'error', 'bark', 'error'];
  let eventName = events[Math.floor(Math.random() * events.length)];
  let event = JSON.stringify({ event: eventName, payload: `${eventName} just happened!` });
  client.write(event, () => {
    if (quit) { client.end(); }
  });
}

// Fire one event
sendEvent(true);

// Fire a random event every .5 seconds...
// setInterval( sendEvent, 500 );

