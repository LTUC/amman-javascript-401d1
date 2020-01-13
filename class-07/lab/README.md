# LAB: Express

Create an Express API Server

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Requirements

### API Server

- Create a repository called `lab-07-api-server`
- Create an express server, using 2 files
  - `index.js` should require `lib/server.js` and receive an object with a `start()` method
    - It should call the `.start()` method with the correct port
  - `lib/server.js` should contain all of the logic for the server (essentially all of the code)
- Write a middleware function called `timestamp`
  - Set it up to run at the application level for all routes
  - Put the current timestamp (formatted like a proper date) on the `request` object in a property called `requestTime`
- Write a middleware function called `logger`
  - Set it up to run at the application level for all routes
  - Execute a `console.log()` containing the request `path`, `method`, and the `requestTime` property of the request object
- Add 404 and 500 error handling middleware to the server
- Import the in-memory data models you created in the previous module (Lab 04)
- Create CRUD routes to handle requests for both "categories" and "products"
  - `app.get('/products', (req, res) => {})` (and `app.post()`, `app.put()`, `app.delete()`)
  - `app.get('/categories', (req, res) => {})` (and `app.post()`, `app.put()`, `app.delete()`)
  - Which methods in your model should each of these route methods call?
  - Once you've required the models, how do you call those methods? Where is the data coming from?

#### Stretch Goal

- Write a curried middleware function called 'auth' only for use only by the `post`, `put`, and `delete` routes
  - It should accept a boolean parameter
  - Default this to `true`
  - If true, call `next()` and let the route execute normally
  - If not, force an error
  - This is to simulate someone being logged in and having access to your routes
    - By defaulting it to true, we're just going to live in the "happy path" so that we can see things working
    - But we do want to consider the case of a bad login ...
    - What is the best approach for testing this?

> **Engineering Note** - *Modularity is a tool that not only makes your code more readable and consumable by other developers, it helps you to think about how to break problems down* Are all of your middleware functions in separate modules?

### Testing

- Reminder that if you don't separate the `index.js` and the `server.js` you will have an impossible time testing your server
  - Use `supergoose` or `supertest` to wire up a mock server
- Write unit tests for the middleware
- Import your unit tests for the data model

#### Web Server Visual Tests
  - Open this [React Application](https://w638oyk7o8.csb.app/)
  - In the form at the top of the page, enter the URL to your API Server
  - This server is configured to use the routes noted in the first lab requirement
  - If your lab is working, this app will show your API Data!

**Engineering Note** - *Testing servers without side-effects is crucial. More critical is not having to manage starting/stopping a server in multiple environments.*

## Assignment Submission Instructions

Refer to the the [Submitting Express Server Lab Submission Instructions](../../../reference/submission-instructions/labs/express-servers.md) for the complete lab submission process and expectations
