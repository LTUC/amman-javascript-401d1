# LAB - Custom Hooks: Sockets and Fetch

For this assignment, you will be refactoring a socket.io based chat application to make use of React Hooks and Context APIs

In addition to the raw functionality, you should give careful consideration to the visual layout of your application, color choices, animations, and overall usability.

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

Starter code has been provided for you in the `/lab/starter-code` folder.

Open [Code Sandbox](http://codesandbox.io) and Create a new application. When prompted, choose "From GitHub" and then paste in the URL to today's starter code folder from your fork of the class repository.

You will be submitting the URL to this working sandbox as part of your assignment.


## Practice creating custom hooks
Begin with: `starter-code/practice`

In this folder, you'll find 2 sub-folders
* `server` contains a minimalist server that runs a `socket.io` server on port 3000 and also starts up a version of the `Q` server from module 4. Each listens for different events.  Review this code and note what's being listened for and what's being emitted.
* `client` contains a React application that
  * Takes your form input and displays it on screen as you type
  * When you 'submit' the form
    * Publishes separate messages to the `Q` server and the `socket.io` server with the form data
  * Subscribes to those events and renders their 'payload'

When the server is running, this app should show your form entry 3 times.

**Refactor this application as follows**

* Create a custom hook called `form`
  * This should handle the change for each field, the form submission
  * Export submit & change handlers and form data
  * The hook should accept a callback function that it will call (if supplied) on form submit, with the form data
  * Convert the current form implementation to use your new hook

* Create a custom hook called `socket`
  * Connect to the socket.io server on port 3000
    * Where in the hook do you make this connection?
  * Export a subscribe method that takes an event and a callback
    * Runs the callback with the payload when an event fires
  * Export a publish method that takes an event and some payload
    * Emits the event and payload to the server for broadcasting
  * Convert the current socket publish/subscribe implementation to use your new hook

* Create a custom hook called `q`
  * Connect to the socket.io server on port 3333
    * Where in the hook do you make this connection?
  * Export a subscribe method that takes an event and a callback
    * Runs the callback with the payload when an event fires
  * Export a publish method that takes an event and some payload
    * Emits the event and payload to the server for broadcasting
  * Convert the current Q publish/subscribe implementation to use your new hook

### Testing
* Complete basic logic/unit testing on the hooks

## To Do Application Refactor

You've been supplied starter code for the To Do application that can (optionally) connect to a live API server. In this assignment, you'll need to refactor the application in a number of ways:

* Modularize both the todo and todo-connected components.
  * They will both use the same form, list, details sub-components
  * Use the `useReducer` hook to manage your displayed lists.
  * The application should work the same way, with the obvious exception that the 'connected' version is hitting server.
* Alter the application to use the connected component, as you'll need to use your live server to save real data and fire real events.
* Convert the form component use the `form` hook you created in the practice assignment
* Implement the `Q` hook and subscribe to the various **CRUD** events that your deployed API and Q server are wired for.
* As you save/delete records, anyone using your application (e.g. having multiple tabs open) should see updates in real time.

### Testing
* Write tests before you start the refactoring process
* Your tests should continue to work after the refactor
* You should expand on them after you add in the Q connection.

### Resources

* You will need a deployed API server to store your data into a 'todo' collection
* You will need a deployed Q server to handle events.
* The API server should be connected to, and publish CRUD events to your Q server

If you are having issues or troubles getting these servers deployed on your own, you may connect to the public API and Q servers. We highly recommend using your own, however.

* [API Server](https://api-js401.herokuapp.com/api/v1)
* [Q Server](https://q-js401.herokuapp.com)

## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
