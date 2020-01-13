'use strict';

const fs = require('fs');
const util = require('util');

// Wrap the fs.readFile method with our interface so that we can properly test it modularly.
const readerWithCallback = (file, callback) => {
  fs.readFile(file, (err, data) => {
    if (err) { callback(err); }
    else { callback(undefined, data.toString().trim()); }
  });
};

// As a promise
const readFilePromise = util.promisify(fs.readFile);
const readerWithPromise = (file) => {
  return readFilePromise(file)
    .then(contents => contents.toString().trim())
    .catch(error => error);
};

module.exports = { readerWithCallback, readerWithPromise };