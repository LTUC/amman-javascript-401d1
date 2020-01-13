# Readings: Express

Below you will find some reading material, code samples, and some additional resources that support today's topic and the upcoming lecture.

**For your assignment, go through the reading material and watch/bookmark the additional resources resources provided. Create a wiki entry in your fork of the class repo that summarizes the principle reading topic as though you were presenting the material to a new developer.**

Wiki Entry Ideas:

- Blog Article (2-3 paragraphs with code sample)
- Dictionary / Flash Cards
- Notes in outline form

## Reading

### Express Routing

- Event driven system
  - `app.get('/thing', (req,res) => {})`
  - This is the same pattern we see in Vanilla JS, jQuery
  - 'When a get event happens in our server, on "/thing", run this function...'
- The Request Object
  - `(req,..)`
  - /:parameters
    - `app.get('/api/:thing',...)` = `req.params.thing`
  - Query Strings
    - `http://server/route?ball=round` = `req.query.ball`
- The Response Object
  - `(..., res)`
  - Responsible for sending data back to the browser
  - Has methods like `send()` and `status()` that Express uses to format the output to the browser properly
    - Sends Headers
      - Cookies
      - Status Codes

### Express Middleware

- What does it do?
  - A series of functions that the request "goes through"
  - Each function receives `request`, `response` and `next` as parameters
  - Types of middleware: Application and Route
  - Application Middleware
    - Error Handling
    - Bringing in other routes
    - Applies Defaults
    - JSON, Body and Form Parsing
    - Runs on every request
  - Route Middleware
    - Dealing with specific things for a route
    - Generally, things many routes would participate in
      - Are you logged in?
      - What is your IP?
      - Have we seen you here before?
- How can we take advantage?
  - Logging
  - Dynamic Model Loading
  - Browser, Location, User specific content
  - Consistent Data Transition/Modeling/Preparation (Pre-Render)

### Modularization & Separation of Concerns

- Modularizing your code into logical chunks
- Each thing should do the thing its best at
- Dan Abramov: <http://react-file-structure.surge.sh/>

### CRUD Operations with REST and Express

- CREATE
  - `app.post('/resource')`
- READ
  - `app.get('/resource')`
- UPDATE
  - `app.put('/resource/:id')`
- DESTROY
  - `app.get('/resource/:id')`

### Server Testing

- Generally, avoid starting the actual server for testing
- Instead, export your server as a module in a library
- Then, you can use `supertest` to run your tests
  - This will hit your routes as though your server was running, without actually starting it
  - That's one less thing to go wrong (eliminate variables when testing!)
- Additionally, you can wrap `superagent` in a module (the demo code created an `agent.js` module that does this)
  - Doing this, allows you set up a "mock" of this new agent module
  - Create a folder called `__mocks__` where the `agent.js` file is with an agent.js file in it
  - When you invoke `jest.mock()` on the agent file in your test, jest is smart enough to use that mocks version instead of the real one
  - Why is this cool? We can 100% fake every call to the API.  Again -- you don't want your tests of the web server to be dependant on the API running, so mock (fake) it, so that you are testing only the interface to the API, not the actual data
  - You test the data/veracity of the API when you write your API tests, not web server tests...

### Test Pyramid

- Server Testing crosses boundaries
  - Units: Server Internal Functions
    - Mock any integrations (like data fetching)
  - Integration: How it connects to other services
    - Really connect to other services (hard dependencies)
  - Acceptance
    - The server might be a dependency of some other test

## Additional Resources

### Videos

- [express middleware explained](https://www.youtube.com/watch?v=9HOem0amlyg)

### Bookmark / Skim

- [using express middleware](https://expressjs.com/en/guide/using-middleware.html)
- [express middleware](https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm)
- [using express routing](https://expressjs.com/en/guide/routing.html);
- [supertest](https://github.com/visionmedia/supertest)
- [express middleware list](https://expressjs.com/en/resources/middleware.html)
- [http status codes](https://www.restapitutorial.com/httpstatuscodes.html)
