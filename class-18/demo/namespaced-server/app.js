const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
const home = io.connect('http://localhost:3000/home');
const school = io.connect('http://localhost:3000/school');

const faker = require('faker');

socket.emit('speak', faker.hacker.phrase());

school.emit('speak','Do Your Homework');
school.emit('challenge','BST Time!');

home.emit('speak','Eat some dinner');


