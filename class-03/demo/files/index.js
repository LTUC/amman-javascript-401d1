'use strict';

const fs = require('fs');
const util = require('util')

const reader = require('./lib/reader.js');

let file = `${__dirname}/data/file.txt`;

// DEMO Part 1 -- do all of this inline, in this file, to demonstrate all 3 ways to read a file

// Callback Style
fs.readFile(file, (err, data) => {
  if (err) { throw err; }
  console.log('Callback', data.toString().trim());
});

// Promise Style
// First, turn the normal fs.readFile into a promise
let readFilePromise = util.promisify(fs.readFile)

// then, call it like any other promise
readFilePromise(file)
  .then(data => console.log('Promise', data.toString().trim()))
  .catch(err => { throw err; });


// Async/Await Style
// Need to make an async function and invoke it
async function readFileAsync(file) {
  try {
    let data = await readFilePromise(file);
    console.log('Async', data.toString().trim());
  }
  catch (err) { throw err }
}

readFileAsync(file);


// DEMO Part 2 -- move the logic to a library and write a couple of tests

// As a callback
reader.readerWithCallback(file, (err, data) => {
  if (err) { throw err; }
  console.log('Callback from module', data);
});

// then, call it like any other promise
reader.readerWithPromise(file)
  .then(data => console.log('Promise from module', data))
  .catch(err => { throw err; });


// Async/Await Style
// Need to make an async function and invoke it
async function readFileAsyncFromModule(file) {
  try {
    let data = await reader.readerWithPromise(file);
    console.log('Async from module', data);
  }
  catch (err) { throw err }
}

readFileAsyncFromModule(file);