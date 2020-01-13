# LAB: API Server

In this lab, you will be producing a production ready API server with dynamic models

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

- npm install: cors, morgan, dotenv, mongoose, @code-fellows/supergoose
- If not already running, start mongo server: `mongod --dbpath=/Users/path/to/data/db`

## Requirements

### Features

Create an API server with the following features

- Express server, connected to a mongo database
- Morgan Logger
- CORS Protection
- Error Handling
- 2 Mongo Connected Data Models: categories and products
- Virtually join the category and product documents on category name so that requests for a category includes an array of products assigned to it
- Full set of generic CRUD routes which will work for any valid model, with an `/api/v1` base
  - Routes should return the proper HTTP status codes based on the actual result of the operation
  - GET /api/v1/:model
    - Returns an object with 2 keys: `count` (number) and `results` (array of objects/records from the database)
  - GET /api/v1/:model/:id
    - Takes an ID as a route parameter
    - Returns a single object (the record from the database)
  - POST /api/v1/:model
    - Accepts a full record object to be added to the DB as the request body
    - Returns a single object (the record added to the database)
  - PUT /api/v1/:model/:id
    - Takes an ID as a route parameter
    - Accepts a full record, including id, to be updated as the request body
    - Returns a single object (the record as updated in the database)
  - DELETE /api/v1/:model/:id
    - Takes an ID as a route parameter
    - Returns undefined or null (the record is no longer in the database)

### Implementation Requirements

- Continue to use your Category and Product models
  - Put them in a `models` folder in your source tree along with the interface
- Create a common router with handler functions
  - Handle the loading of any model dynamically
    - When a user requests, for example, `/api/v1/categories`, your `app.get('/api/v1/:model')` route handler should use the categories model
    - Create middleware using `router.param` on `model` that
      - Identifies a valid model in the route param
      - Finds the module
      - Requires and instantiates it
      - Makes that model available to the handler function so that you can still call, for example, `model.create()`
  - The app will now need to import and use this router instead of multiple routers as before
- Note: Once you've DRY'd the routes out, the tests that you wrote should still work.

**Engineering Note** This is a main benefit of testing -- asserting that major changes don't effect functionality!

### Testing

- Using `supergoose`, Write a complete set of data model and server tests
- Refer to your previous assignments for examples and inspiration

#### Web Server Visual Tests

- Open this [React Application](https://w638oyk7o8.csb.app/)
- In the form at the top of the page, enter the URL to your API Server
- This server is configured to use the routes noted in the first lab requirement
- If your lab is working, this app will show your API Data!

## Assignment Submission Instructions

Refer to the the [Submitting Express Server Lab Submission Instructions](../../../reference/submission-instructions/labs/express-servers.md) for the complete lab submission process and expectations
