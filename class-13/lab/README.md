# LAB: Bearer Authorization

To this point, our `auth-server` is able to handle Basic Authentication (user provides a username + password) and Oauth (user authenticates through a 3rd party). When a "good" login happens, the user is provided a JWT signed "Token" from our auth-server.

This lab will have you creating a new route (`/secret`) which requires a valid token obtained from performing the above activities in order to return the user some data.

You'll be required to wire up Bearer auth properly and then to dive in deeper and add some security measures to the tokens to prevent misuse and fraud.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Requirements

- Implement simple Bearer Authentication within your Auth server
- Add additional security measures to your token validation system.

### Assignment 1: Install the core bearer authorization system

- `bearer-auth-middleware.js` - Handle the Bearer Header to pull and verify with the token
- `users-model.js` - Add a bearer authorization method that verifies the token
- Create a few users+passwords to test with

### Assignment 2: Add additional security to the core bearer authorization system...

- Add a minimum of 2 additional security measures to your token validation system
  - Implement these via configuration (i.e. an env setting) so that your system can handle multiple authorization schemes
  - e.g.
    - Add support for the creation and usage of time sensitive (valid for 15 minutes) JWTs
    - Add support for the creation and usage of 'single-use' JWTs
      - With every authenticated access, re-send a new JWT token as a cookie or header
      - Disable those that you've already authenticated
    - Implement Sessions
      - Rather than store a user's information in the token, create a "session" with an "id"
        - On the server, store lookup information in a session model using that ID
        - Sessions should timeout or be invalidated in some automated fashion
    - Add an additional layer of encryption

### Notes

To test your routes, you'll need to first login with a valid user to get a token, and then use httpie or postman to hit the routes using a Bearer Token

- **httpie**: http post :3000/secret "Authorization:Bearer TOKENSTRING"
- **Postman** or **Insomnia**:  Set authorization header with Bearer TOKENSTRING"
- Chrome directly, using the Headers extension

### Testing

- Add test coverage to the auth tests to assert that:
  - given a good token user is able to "log in"
  - Tokens can optionally be expired
  - Expired tokens do not allow a user to login

## Assignment Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
