# Custom Hooks: Sockets and Fetch

## Learning Objectives

* Understand, Use, Create Custom React Hooks
  * Form State
  * Realtime Connections
  * `useEffect()` usage with connections
* Connect to a socket.io server
* Connect to a Q/message server
* Subscribe to remote events
* Emit events and data back to the server

## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review**
* :15 **Lightning Talk**
* Break
* :30 **CS/UI Concepts** -
* :20 **Code Review**
* Break
* :60 **Main Topic**

## Main Topic: 

### Custom Hooks
* Use the `useXxxx()` naming convention
* Manage their own state internally
* Export data, methods, or both
* Have access to the react cycle
* Used in functional components

### Socket.io
* What is Socket.io?
  * Keeps a pipe open between client and server
  * Keeps communication pathway open
  * Responds to events that one side or the other `emits`
  * Publish an Event `socket.emit('run', tellEveryoneToRun)`
  * Respond to an Event `socket.on('run', doTheRunningMan)`
* On the React side, you can respond to an event and add it's payload to state, or use a state change to trigger an `emit`
