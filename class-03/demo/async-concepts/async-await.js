'use strict';

let checkForWords = (words) => new Promise((resolve, reject) => {
  if (words) { resolve('OK'); } // Good! We have words. 'OK' goes to a .then()
  else { reject('Bad'); }       // Bad ... no words. 'Bad' goes to a .catch()
});


// Must declare a function as "async"
async function getWords(text) {
  // then (lol), you can "await" whatever the long running task might return
  let result = await (checkForWords(text));
  console.log('Get Words ...', result);
  // return result;
}

console.log(getWords('Hello')); // does nothing (actually logs the promise object);
getWords('Hello');  // code runs in the function and logs


// If the async function returns something, you can treat these like promises if you want
getWords('New set of words')
  .then(data => console.log('Got data back', data))
  .catch(console.error);


// Here's a crazy example of looping until we get a good one
let longRequest = (url) => {
  let data = {
    count: 2,
    results: ['a', 'b'],
  };

  let rando = Math.floor(Math.random() * 99) + 1;
  return (rando < 50) ? data : false;

};

async function fetchRemoteData(url) {
  let result = false;
  while (!result) {
    result = await longRequest(url);
    console.log(result);
  }
}


fetchRemoteData('http://foo.com');
