'use strict';

const base64 = require('base-64');
const users = require('./users.js');

module.exports = (req, res, next) => {

  if(!req.headers.authorization) { next('invalid login'); return; }

  let basic = req.headers.authorization.split(' ').pop();
  console.log('req auth headers:', req.headers.authorization);
  console.log('basic:', basic);

  let [user, pass] = base64.decode(basic).split(':');

  console.log('decoded user/pw', [user, pass]);

  users.authenticateBasic(user, pass)
    .then(validUser => {
      req.token = users.generateToken(validUser);
      console.log('token:', req.token);
      next();
    }).catch( err => next('invalid login'));
}