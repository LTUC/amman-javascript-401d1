'use strict';

const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/335083857671/queueY',
  handleMessage: handler,
});

function handler(message) {
  // I'm just sure I could do something way more interesting that log out the message
  // ... like maybe run your lambda function???
  const msgObject = JSON.parse(message.Body);
  console.log('Queue Y ...', msgObject.Message);
}

app.on('error', (err) => {
  console.error(err.message);
});

app.on('processing_error', (err) => {
  console.error(err.message);
});

app.start();

