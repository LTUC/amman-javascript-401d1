'use strict';

let data = Buffer.from('Hello World');
console.log(data);

// This is the buffer turned back into a UTF-8 string
console.log(data.toString());

// This is the buffer turned into a hex string (notice the numbers match the buffer object)
console.log(data.toString('hex'));

// This is the first byte of the buffer, in DECIMAL
console.log(data[0]);

// Change second byte of the buffer to the letter o
data[1] = 111;

// Dig ... the new word
console.log(data.toString());

// ... we just changed the text by directly dinking with a single byte, not by touching the text itself!

