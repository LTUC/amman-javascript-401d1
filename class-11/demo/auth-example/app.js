'use strict';

let base64 = require('base-64');
let bcrypt = require('bcrypt');

let pwstring = 'myusername:password12345';

let encoded = base64.encode(pwstring);
let decoded = base64.decode(encoded);

// ***********************************

let password = 'anypassword';
let complexity = 10; // aka salt

// custom encrytion method
encrypt(password, complexity);

async function encrypt(pw, rounds) {
  let hashed1 = await bcrypt.hash(password, complexity);
  let hashed2 = await bcrypt.hash(password, complexity);

  let isValid = await bcrypt.compare(password, hashed1); // true or false
  let isValid2 = await bcrypt.compare(password, hashed2);

  console.log('hashed1():', hashed1);
  console.log('hashed2():', hashed2);

  console.log('isValid():', isValid);
  console.log('isValid2():', isValid2);
}