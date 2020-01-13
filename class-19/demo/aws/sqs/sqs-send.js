'use strict';

const uuid = require('uuid/v4');
const Producer = require('sqs-producer');

// create simple producer
const producer = Producer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/335083857671/nodeq',
  region: 'us-west-2',
});

//const producer = Producer.create({
//  queueUrl: 'https://sqs.eu-west-1.amazonaws.com/account-id/queue-name',
//  region: 'eu-west-1'
//  accessKeyId: 'yourAccessKey',
//  secretAccessKey: 'yourSecret'
//});



let counter = 0;

setInterval( () => {

  const message = {
    id:uuid(),
    body:`This is message ${++counter}`,
  };

  producer.send(message, function(err,msg) {
    if (err) { console.log(err); }
    else {
      console.log('Sent', message);
    }
  });

}, Math.floor(Math.random() * 500));


