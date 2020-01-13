# Socket.io 

## Learning Objectives

* Implement a standalone Socket.io server for handling events and real time messaging.
* Use events to properly route incoming messages and payload

## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review**
* :15 **Lightning Talk**
* Break
* :20 **Code Review**
* :30 **CS/UI Concepts** -
* Break
* :60 **Main Topic**

## Computer Science Concept:
* Web Sockets

## UI Concept:
* SASS Mixins

## Main Topic:
Socket.io is a "mash-up" of sorts between Events and TCP or UDP. It bridges both concepts to allow for event-driven "real time" communication between disconnected applications.

### Connections
With TCP, you connect directly to a server with a keep-alive type of connection.

With Socket.io, you connect to a server over HTTP. The session is "kept alive" through a series of pings and acks, with session information being preserved.

### Messaging
Standard node events are sent with `emit()` and received with `on()` ... Socket.io uses the same methodology/terminology.

In an event driven node app, the entire app is in memory, and (through a common event pool), all parts of your application can emit and hear events, communicating with each other.  However, no outside application can participate in these events natively.

With Socket.io, the entire purpose is to have events shared between 'disconnected' participants.  Through a mediator (server), clients connect, emit events, and respond to events from the server.  A typical flow works like this:

* Client Applications 1, 2, 3, x ... connect to a running Socket.io server
* Client Application 1 emits an event called 'speak' to the server, with the data 'Hello World'
* Server has an `on('speak', (data) => {})` which "hears" that event
* Upon processing the event, the server may elect to `emit()` an event of it's own.
  * i.e. `socket.emit('incoming-message', data)`
* Other client applications that have connected into the server that have a listener on that event type, can then "hear" it as well... 
  * i.e. `socket.on('incoming-message', text => console.log(text)`
  * Not every client will have a listener for every event.
  * The server may not have a listener for every event a client sends

