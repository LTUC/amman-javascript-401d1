# LAB: Socket.io

Create an event driven application that "distributes" the responsibility for logging to a **separate server** via Socket.io , using only events to trigger logging based on activity.

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.


## Getting Started

* `app.js` 
  * Accepts a filename as a command line parameter
  * Reads the file from the file system
  * Converts it's contents to upper case
  * Writes it back to the file system

## Requirements

Refactor the provided application (`app.js`) using best practices for modularization, asynchronous file access, and test-ability.

Connect the application (app.js) to a `socket.io` server and emit messages related to file access.  Connect a new application (`logger`) to the server and log all file activity.

### Assignment
* The application must accept a filename as a command line parameter
  * Read the file from the file system
  * Convert it's contents to upper case
  * Write it back to the file system
* Following the write operation, report back to the user (console.log) the status
* Any and all errors must be thrown

#### Server
* Create a socket.io server in a new folder called `server`
* Setup listeners for `file-save` and `file-error` events
* When they occur, `emit()` the appropriate event and payload to clients (specifically, the 'logger' will pick this up)

#### Logger
* Create a socket.io server for logging in a new folder called `logger`
* Connect the logger to the socket.io server
  * Listen for `file-save` and `file-error` events
  * console.log() both error and save messages

#### Application
* Create an application folder called `app`)
* Connect your app to the socket.io server
* Refactor the app to be modular, testable, and clean
  * Read/Write should be done in promises, not callbacks
  * File Reading/Writing/Upper-casing should happen in one module
    * Each operation should be in a separate function
* Rather than throwing errors and console.log() inline, fire `file-error` and `file-save` events to the server that you connected to


### Operations
* Start your server on port 3000
* In a separate terminal window, start your logger (it should connect to the server)
* In a separate terminal window, run the application from the CLI to alter the file
* You should observe the event stream in the client and errors on the server


### Testing
* app - Write tests around all of your units
  * File Read, File Save, Uppercase
  * Mock the fs module methods so that your tests don't use actual files
* logger - Test event handler functions (not event listeners themselves)
  * Use spies to help testing your logger methods (assert that console.log was called right)


### Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations

* Your server need not be deployed to Heroku for this lab
