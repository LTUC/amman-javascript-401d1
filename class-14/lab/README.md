# LAB: Access Control

Being able to login is great. But controlling access is vital to creating a scalable system. In this lab, you will implement Role Based Access Control (RBAC) using a dynamic Access Control List (ACL) with Mongo models.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

## Requirements

- Create a new router module at the root of your server called `additional-routes.js`
- Create some test routes here, as shown below, that we can protect using our authentication model
- When authorized, these routes can send simple data (i.e. "OK") in the response as a simple proof of life
- When not-authorized, your server should respond with an "Access Denied" error
- Protect your New Routes with both Bearer Token Authentication
- Additionally, your routes should require the proper permissions based on user capability
  - `router.get('/public')` should be visible by anyone
  - `router.get('/private')` should require only a valid login
  - `router.get('/readonly')` should require the `read` capability
  - `router.get('/create)` should require the `create` capability
  - `router.put('/update)` should require the `update` capability
  - `router.patch('/delete)` should require the `update` capability
  - `router.get('/everything')` should require the `superuser` capability
- You will need to restrict based on the given permission via middleware
- Implementation of the ACL itself should be re-written using a separate model called "roles" populated as a **virtual field** in the users table
  - *not as a hard-coded object/arrat within the User Model as done in the demo*

### Notes

- You will need to create, roles and capabilities permissions in a new collection called 'roles' in  your mongoose database before anything will work properly
- There are a few ways to do this
  - Create a route that lets you create a role (similar to a POST in the API) and create them one at a time
  - Create a route that builds the roles collection using an array
  - Manually create records in the mongo database from the CLI

To test your routes, you'll need to first login with a valid user to get a token, and then use httpie or postman to hit the routes using a Bearer Token

httpie Example

```bash
http post :3000/hidden-stuff "authorization: bearer TOKENHERE"
```

### Testing

- Add tests to the api routes, asserting restricted access to the routes as shown.
- Add tests to the mongoose model for the created static and instance methods.

## Assignment Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
