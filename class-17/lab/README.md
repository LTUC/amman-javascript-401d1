# LAB: TCP Server / Message Application

Create an event driven application that "distributes" the responsibility for logging to a **separate server** via TCP , using only events to trigger logging based on activity.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

- `app.js`
  - Accepts a filename as a command line parameter
  - Reads the file from the file system
  - Converts it's contents to upper case
  - Writes it back to the file system

- `server.js`
  - Listens for connections on port 3001
  - Broadcasts out every message it hears to all connections

## Requirements

Create a 3 service system that can modify a file, using network events for status notifications

### Worker Application

- Accept a file name as a command line parameter
- Find the file specified in the file system
- Use the Node.js `fs` module to read the contents of the file
- Convert the contents of the file to Uppercase
- Save the contents back to the file
- Broadcast an event indicating success or failure to a messaging hub

### Server Hub Application

- Allows multiple clients to connect via TCP and stay connected
- Listens for events
- Validates events by type and content
- Re-Broadcasts events to all connected clients

### Responder Application

- Connects to the Server Hub
- Responds to 2 events
  - 'file-saved'
    - On this event, execute a `console.log()` with the event payload
  - 'file-error'
    - On this event, execute a `console.error()` with the event payload

### Notes

- You will need to start your servers up in the right order so that you can visually test things out.

1. `server` - needs to be up so that it can accept and re-emit events
1. `logger` - needs to have a running server to connect to, so that it can hear events
1. `app` to run and have the server hear your events

### Stretch Goals

- Monitor, Receive only specific events
- Create a new client that listens to different events
  - i.e. split out the logger into a separate error handler

#### Deployment

Not required for this assignment

### Testing

- Write tests around all of your **units**
- Test event handlers (not events themselves)
- Use spies to help testing your logger methods (assert that console.log was called right)

## Assignment Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
