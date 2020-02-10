'use strict';

const inquirer = require('inquirer');
const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => {});

let name = '';
const messages = [];

function sendMessage(text) {
  console.log('sending message:', text);
  let message = `[${name}]: ${text}`;
  let event = JSON.stringify({ event: 'message', payload: message });
  client.write(event);
}

client.on('data', (data) => {
  let event = JSON.parse(data);
  if (event.event === 'message') {
    messages.push(event.payload);
    console.clear();
    messages.forEach(message => console.log(message));
    console.log('');
  }
});

async function getName() {
  console.clear();
  let input = await inquirer.prompt({ 'name': 'name', 'message': 'what is your name?' });
  name = input.name;
}

async function getInput() {
  let input = await inquirer.prompt([ { 'name': 'text', 'message': ' ' } ]);
  sendMessage(input.text);
  getInput();
}

getName();
getInput();