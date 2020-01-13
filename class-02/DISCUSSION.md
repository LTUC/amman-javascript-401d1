# Readings: Classes, Inheritance, Functional Programming

Below you will find some reading material, code samples, and some additional resources that support today's topic and the upcoming lecture.

**For your assignment, go through the reading material and watch/bookmark the additional resources resources provided. Create a wiki entry in your fork of the class repo that summarizes the principle reading topic as though you were presenting the material to a new developer.**

Wiki Entry Ideas:

- Blog Article (2-3 paragraphs with code sample)
- Dictionary / Flash Cards
- Notes in outline form

## Reading

### Functional Programming

Functional programming means programming with a distinction between pure code and impure code. Pure code has no side effects. It’s referentially transparent. It means the same results every time you run it. Impure code contains (and often relies on) side effects, so running it twice is different from running it once.

The distinction between pure code and impure code uniquely identifies functional programming and distinguishes it from other paradigms such as procedural and Object Oriented. Procedural is about modeling your solution as sequential steps. Object Oriented is about modeling your solution as communicating objects. Functional programming is about modeling your solution as pure functions.

**Pure functions** return a value solely based on what was passed into it. The idea behind it is that it will be a pure function if it always returns the same result if the same values are passed into it, and it doesn’t modify values outside of ts scope, that makes it independent from any state in the system. Therefore, a pure function can never mutate data, produce no side effects and can be easily reused. An example of a non pure function will be a function that makes an API call or returns an unpredictable result.

An "impure" function (relies on external state, produces a "side effect")

```javascript
var tax = .075;
function calculateMealPrice( mealTotal ) {
  let mealTax = (mealTotal * tax);
  mealTotal += mealTax;
  console.log('Tax Charged:', mealTax);
  return mealTotal;
}
let total = calculateMealPrice( 150 )
console.log(total)
```

A "pure" function (no side effects, esoteric state, consistent results)

```javascript
function multiply(x,y) {
  return x * y
}
console.log(multiply(3,5));
```

**Higher order functions:** In Javascript, functions are treated as objects, therefore we can pass functions around as we would any other value. A higher order function is simply a function that operates on other functions. They can take in a function as input, or return one as output.

Squaring numbers in an array without a Higher-order function

```javascript
const arr1 = [1, 2, 3];
const arr2 = [];
for(let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * arr1[i]);
}
console.log(arr2); // [1,4,9]
```

... and with the Higher-order function map

```javascript
const arr1 = [1, 2, 3];
const arr2 = arr1.map(function(item) {
  return item * item;
});
console.log(arr2); // [1,4,9]
```

The main tenets of functional programming

- Pure Functions
- Higher Order Functions
  - Examples: map, filter, reduce
- Immutable State

### Objects and Inheritance

JavaScript objects use prototype-based inheritance. Its design is logically similar (but different in implementation) from class inheritance in strictly Object Oriented Programming languages like Java and C#.

It can be loosely described by saying that when methods or properties are attached to object’s prototype they become available for use on that object and its descendants. But this process often takes place behind the scenes.

When you use class and extends keywords internally JavaScript will still use prototype-based inheritance. It just simplifies the syntax (this is often called "Syntactic Sugar"). While classes are easier to use, it’s still very important to understand how prototype-based inheritance works. It’s still at the core of the language design.

Prototypal Inheritance

```javascript
function Animal(name) {
  this.name = name;
}
Animal.prototype.walk = function() {}

function Bird(name) {
  // I can do all the things animals can do!
  Animal.call(this, name);
}
// Unlike other animals, birds can fly
Bird.prototype.fly = function() {}
```

The same thing with classes (much cleaner!)

- `function()` becomes `class {}`
- `call()` becomes `extends`

```javascript
class Animal {
  constructor(name) {
    this.name  = name;
  }

  walk() {}
}

// Thanks to 'extends', all birds can now do all things animals can
class Bird extends Animal {
  // Birds can also do their own thing.
  fly() {}
}
```

### Errors

Error messages are super important tools for debugging broken code. Javascript has many built in error messages, but you can also define your own errors in your programs. It is important to not forget that errors will happen in production. Error logs are kept in order to fix bugs in productions. Writing good error messages is critical for finding and fixing bugs in deployed applications.

### Writing Good Error Messages

A great error message should have the following features

- a timestamp so that a timeline of the error can be made
- a message about the problem that occurred
- a message about the cause of the problem
- a consistent format (so that it can be parsed and searched)
- a severity level (low, med high) or (0 - 10)

``` javascript
// creating a smart error
class Bug extends Error {
  constructor({problem, cause, level=0, timestamp=new Date().toISOString()}){
    super(`__ERROR__ ${problem}: ${cause} (LEVEL ${level}) (TIMESTAMP ${timestamp})`)
    this.problem = problem
    this.cause = cause
    this.level = level
    this.timestamp = timestamp
  }
}

let error = new Bug({problem: 'cannot create user', cause: 'requires password'})
```

### Handling Thrown Errors

Javascript functions can throw errors. Throwing an `Error` is a great way to force developers to use a function correctly. Un-handled errors will often crash Javascript and stop program execution. This is referred to as *failing fast*. The idea is that the sooner the code fails, the sooner a developer will find bugs and fix them. Though throwing errors is a useful feature of the language itself, programs like servers need a way to continue running in spite of bugs in the code. Javascript has a `try {} catch (error) {}` syntax for handling this.

``` javascript
let userInput = '{'
try {
 let data = JSON.parse(userInput)
 // do something with data
} catch(e) {
  console.error(e)
}
```

### Error Cheat Sheet

| Type |  Reason |
| --- | --- |
| Error | generic error |
| ReferenceError | an attempt was made to access a variable that is not defined |
| SyntaxError | the javascript is not valid |
| TypeError | a provided argument was no the allowable type |
| SystemError | a NodeJS error that occurs when a system error has occurred |

### System Error Cheat Sheet

- `EACCESS` - an attempt to access a file without the right permissions
- `EADDRINUSE` - an attempt to start a server on a PORT that is already in use
- `ECONNREFUSED` - a connection was deliberately refused by the target machine
- `ECONNRESET` - a connection was forcibly closed by a peer
- `EEXIST` - a file exists and the attempted action required that it didn't
- `EISDIR` - an action expected to act on a file but found a directory
- `EMFILE` - too many files were open for your operating system to handle
- `ENOENT` - an action expected a file, but did not find one
- `ENOTDIR` - an action expected a directory, but found something else
- `ENOTEMPTY` - an action expected an empty directory, but found one with data in it
- `EPERM` - an attempt to do something that you currently don't have permissions to do
- `EPIPE` - an attempt to write data to a connection that had been closed

## Additional Resources

### Videos

- [javascript context tutorial](https://www.youtube.com/watch?v=fjJoX9F_F5g)

### Bookmark / Skim

- [MDN inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MDN class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [node error docs](https://nodejs.org/dist/latest-v6.x/docs/api/errors.html)
