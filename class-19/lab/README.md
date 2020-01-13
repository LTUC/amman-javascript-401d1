# LAB: Socket.io - Message Queue Server

For this lab assignment, we will be writing a Message Queue server that monitors database events, and then modifying our API server to fire events into that Queue on all CRUD operations in our models. This will use a 3rd party library (@nmq/q) to do this work.

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.


## Getting Started

Get your api server up and running!  You're going to be modifying it in this lab.

You will likely be creating 3 new git repositories to house the servers for this lab assignment

### Assignment - Message Queue Server and Logger

* Create a message queue server
* Initiate a queue called "files" that monitors "save" and "error" events
* Initiate a queue called "database" that monitors "create", "read", "update", "delete" and "error" events
* Create a logger application 
* Connects to the "file" and "database" queues
* Performs a custom `console.log()` on the events named above

### Assignment 1 - File Writer (warm-up)
This will be a repeat of the previous labs, this time using your new message queue server.

* In the starter code, you'll once again find an `app.js` that reads and modifies a file.
* On a successful write, publish a "save" event to the "file" queue
* On error, publish an "error" event to the "file" queue
* Modularize the file reader

### Assignment 2 - API Server
Alter your API server to publish events on all CRUD Operations

* Import the Queue client library
* Perform a publish into the database queue, after "create", "update", "delete" and on any errors in your models.

**Questions**

* Where is the best place to do this? In the `mongo.js`? In each mongoose model?
* How will you trap and publish error events?
* Where will you identify the Queue server?

### Testing
* What will your approach be to asserting the API server published the right event?
* How will you write assertions on the logger?

### Deployment
* Deployment is not required


### Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
