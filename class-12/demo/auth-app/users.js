'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let SECRET = 'coolsecret';

let db = {};
let users = {};

// this is on sign up
users.save = async function (record) {

  if (!db[record.username]) {
    record.password = await bcrypt.hash(record.password, 5);

    db[record.username] = record;

    // record:
    // { "myuser": { username: "myuser", password: "hashed-pw"}}
    return record;
  }

  return Promise.reject();
}

// this is on sign in
users.authenticateBasic = async function(user,pass) {
  let valid = await bcrypt.compare(pass, db[user].password);
  return valid ? db[user] : Promise.reject();
}

// this is sign up and sign in
users.generateToken = function(user) {
  let token = jwt.sign({ username: user.username}, SECRET);
  return token;
}

// this gets us our db
users.list = () => db;

module.exports = users;