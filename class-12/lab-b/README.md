# LAB: OAuth

Integrate Github OAuth into your authentication server

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Assignment:

Continue to work on the authentication server you started in the previous lab. You should already have the following features working

- POST `/signup` route that accepts a JSON object to create a new account
  - Returns a token
- POST `/signin` route that accepts a basic authentication header and can 'login' a user with a valid username and password
  - Returns a token
- Tests!

Using the demo/starter code provided, which has the full Github OAuth integration built in, add support for OAuth using github.

- A public folder with an index.html file
- A static router in your server
- GET `/oauth` route that handles the handshaking process
- Install the github module as middleware for that route
- Alter the provided to code to work with your server scheme and users model

### Assignment Submission Instructions

Refer to the the [Submitting Express Server Lab Submission Instructions](../../../reference/submission-instructions/labs/express-servers.md) for the complete lab submission process and expectations
