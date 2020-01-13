# LAB: Authentication

Deploy an Express server that implements Basic Authentication, with signup and signin capabilities, using a Mongo database for storage.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

### Requirements: Auth Server

> Create a UML diagram of the authentication system on a whiteboard before you start

Build an Express Server with the following features

- Connect the server to a Mongo database
- `Users` Mongoose model/schema
  - Hash the plain text password given before you save a user to the database
  - Method to authenticate a user using the hashed password
  - Method to generate a Token following a valid login
- POST route for `/signup`
  - Accepts a JSON object with the keys "username" and "password"
  - Creates a new user record in a Mongo database
- POST route for `/signin`
  - Uses middleware to validate the user
  - If the middleaware "works", send the user a token that you've stored on the `request` object
  - If not, force an express error with `next`
- GET route for `/users` that returns a JSON object with all users
  - Stretch Goal: have this route also use the middleware for authentication
- Basic Authentication Middleware
  - Reads the encoded username and password from the Authentication header
  - Checks the `Users` model to see if this is a valid user and the right password
  - If the user is valid, generate a token and append it to the `request` object

### Implementation Notes

- Modularize the system
- `index.js` should be a standard Express Server entry point
- `server.js` should be a skinny server application that simply brings in requirements and `use()` the routes
- Put all of your auth server logic/feature implementations into a folder called `auth/` to keep everything organized
- At some future point, we will want to be able to re-use the entire `auth/` folder in other servers.
  - So, keep the `index.js` and `server.js` modules as agnostic and small as possible

### Testing

- POST to /signup to create a new user
- POST to /signin to login as a user (use basic auth)
- Need tests for auth middleware and the routes
  - Does the middleware function (send it a basic header)
  - Do the routes assert the requirements (signup/signin)
- Ensure that you use supergoose instead of mongo/express

### Manual Testing Notes

Signup with httpie:

```bash
echo '{"username":"name","password":"pass"}' | http post :3000/signup
```

Signin with httpie:

```bash
http post :3000/signin -a username:password
```

You may also use Postman or RESTy to test out your routes

#### Web Server Visual Tests

- Open this [React Application](https://w638oyk7o8.csb.app)
- Choose the `Auth/Auth` menu option
- In the form at the top of the page, enter the URL to your Auth Server
- The "Add Account" and "Login" options should be operational with your server
- If your lab is working, this app will provide a login form and after a login attempt, your token or an error

## Assignment Submission Instructions

Refer to the the [Submitting Express Server Lab Submission Instructions](../../../reference/submission-instructions/labs/express-servers.md) for the complete lab submission process and expectations
