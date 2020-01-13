'use strict';

// Callbacks OFFLOAD functionality.
// Think of it as though you're telling a method to go do it's work and when it's done, to handle it for you
// A good analogy would be to picture hiring a moving company to move you
//   You give them all of your stuff AND put workers in the back of the truck with instructions
//   When they get there, they read the instructions and move you in.
//   You don't have to worry about when, and you already told them how.  At some point, it'll just get done
//   according to your specifications.

let myCallback = (data) => {
  console.log('2: Received', data);
};

let useTheCallback = (words, cb) => {
  console.log('1: Calling the callback');
  cb(words);
  console.log('3: After the callback');
};

useTheCallback('Hello', myCallback);

// ERROR FIRST Callbacks --- always expect to be called with the first parameter being either an
// error when an error occurs, or as undefined when not.  In the "good" case, data is given as
// the second parameter.

let errorFirstCallback = (err, data) => {
  if (err) { throw err; }
  console.log('2: Received', data);
};

let useTheErrorFirstCallback = (words, cb) => {
  console.log('1: Calling the error first callback');
  cb(undefined, words);
  // cb('ERROR! ABORT!'); // What happens if we switched this line with the above?
  console.log('3: After the error first callback');
};


useTheErrorFirstCallback('Hello', errorFirstCallback);


// Asynchronous Callbacks -- you have no guarantee of run order!
// The setTimeout here simulates this taking a long time to run
// It goes into the callback queue, not the call stack (until it finishes)
let asyncCallback = (err, data) => {
  if (err) { throw err; }
  console.log('2: Received', data);
};

let useTheAsyncCallback = (words, cb) => {
  // do lots of work and come up with some text
  console.log('1: Calling the async callback');
  setTimeout(() => {
    cb(undefined, words);
  }, 1000);
  console.log('3: After the async callback');
};

useTheAsyncCallback('Hello', asyncCallback);

