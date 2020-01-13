# LAB: Data Modeling With NoSQL Databases

Using a Mongo Schema and Data Model, implement a CRUD interface that can be used the same as your "in memory" data models from the previous labs

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

- Initialize a node app
  - Dependencies: `jest`, `@code-fellows/supergoose`, `mongoose` Node modules
- Start your mongo server: `mongod --dbpath=/Users/path/to/data/db`

## Requirements

- Create 2 Mongoose Schemas: `categories` and `products`
- Create 2 Models that use the schemas created, and extend from the Mongo model interface
- Create 1 Mongo model interface based on the Memory Model from lab 04
  - `constructor()` method that takes a schema
  - You must implement the following model interface methods for CRUD operations
    - `get()`
    - `create()`
    - `update()`
    - `delete()`
  - Write a suite of tests, using TDD to get the tests and your model working in sync.
  - Use `@code-fellows/supergoose`
  - Once your tests are passing, validate by writing an app that wires it up for real.
    - When running this app, you should be able to see and manage data in your actual Mongo database

### Reflect: What have we accomplished?

- How does having a single interface impact testing?
  - What do you need (or not) to test?
- Can you see how this might scale?
- How do these interfaces relate to the file and memory interfaces?
- Can they exist in the same system?

### Stretch Goals

- Add some pre and post hooks
  - Logging
  - Upper and Lower casing
- Research Virtual Joins in Mongoose
  - Can you connect the Categories and Products to get a combined result on a find?

### Assignment Submission Instructions

Refer to the the [Submitting Standard Node.js Lab Submission Instructions](../../../reference/submission-instructions/labs/node-apps.md) for the complete lab submission process and expectations
