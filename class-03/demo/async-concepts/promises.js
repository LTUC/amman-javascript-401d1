'use strict';

// Promises DECLARE functionality
// Think of it as though you're telling a method to go do it's work and when it's done, give you the data

let checkForWords = (words) => new Promise((resolve, reject) => {
  if (words) { resolve('OK'); } // Good! We have words. 'OK' goes to a .then()
  else { reject('Bad'); }       // Bad ... no words. 'Bad' goes to a .catch()
});

checkForWords('Hello')
  .then(task => console.log('Words', task))
  .catch(console.error);


// Running many async things in a series
checkForWords(true)
  .then(data => { console.log(data); return checkForWords(data); })
  .then(data => { console.log(data); return checkForWords(data); })
  .then(data => { console.log(data); return checkForWords(data); })
  .then(data => { console.log(data); return checkForWords(false); }) // what happens here?
  .then(data => { console.log(data); return checkForWords(data); })
  .then(data => { console.log(data); return checkForWords(data); })
  .then(data => { console.log(data); return checkForWords(data); })
  .then(data => { console.log(data); return checkForWords(data); })
  .catch(err => { console.error('catch', err); return true; }) // looks like this might "fix" that error
  .then(data => { console.log(data); return checkForWords(data); })
  .then(data => { console.log(data); return checkForWords(false); })
  .then(data => { console.log(data); return checkForWords(data); })
  .catch(err => console.error('quit', err));

// Running Many Async Things Simultaneously ...
let stuffToDo = [];
for (let i = 1; i <= 10; i++) {
  stuffToDo.push(checkForWords(true));
}
Promise.all(stuffToDo)
  .then(things => console.log('Things', things))
  .catch(console.error);


