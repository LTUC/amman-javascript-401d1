#  Socket.io - Message Queue Server

## Learning Objectives

* Describe and Draw the architecture for a Message Queue server
* Describe namespaces and rooms in Socket.io

## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review**
* :15 **Lightning Talk**
* Break
* :30 **CS/UI Concepts** -
* :20 **Code Review**
* Break
* :60 **Main Topic**

## Computer Science Concept:
* Namespaces and Clustering

## Message Queues
A Queue server runs independently, and is tasked with routing events and messaging between clients.

- Any connected client can "publish" a message into the server.
- Any connected client can "subscribe" to receive messages by type.

The Queue server has the ability to see which clients are connected,  to which Queues they are attached and further, to which events they are subscribed.  The Queue server is tasked with receiving any published message and then distributing it out to all connected and subscribed clients.

**What is a message?**
 - A message is a package of information, categorized by queue and event
 - `queue` - Which general bucket does this message belong
   - i.e. "Database Events", "Filesystem Events", "Network Events", etc
 - `event` - What event has happened
   - i.e. "delete, add, update, connection lost, error", etc.
 - `payload` - data associated with the event
   - i.e. "record id, record information, error text", etc.

 **Use Case**
 - An API server responds to a POST request
   - User's access rights are confirmed
   - The data is analyzed and normalized
   - The data is sent to the database for saving
   - The database "publishes" a message into the queue
     - Queue: DB
     - Event: CREATE
     - Payload: JSON Object containing the created record
   - The API server sends information back to it's client as normal
 - Elsewhere ...
   - A logging application is connected to the queue
     - It has subscribed to the "DB" Queue and is listening for `CREATE` events
     - When the above transaction happens, the logger "hears" the `CREATE` event and logs some details to it's logging database and updates some summary data.
   - A web based 'dashboard' application is running and is connected to the queue
     - It also subscribes to `DB`/`CREATE`
     - When this event happens, it updates a counter in the browser for the operator to see that a new record was created.
   - A monitor application is running and is connected to the queue
     - It also subscribes to `DB`/`CREATE`
     - When this event happens, it sends a text to all sales people alerting them that a new customer account was created.
   - ... and so on.


## How do the `@nmq/q` client and server modules work?

Within a socket.io server, by default, every socket that connects is in the same 'pool' of sockets. Everyone potentially hears every event.

While that may work well at a concert, applications typically seek to segment their users. As an example, in an event driven application, there can be made a case for a 'save' event being valid for both files and for database records.

But not every client needs to know about both. Loggers may only care about file changes, and a cache server may only care about databases.

What if there were 2 "pools" of events, called "files" and "db", respectively. And what if each pool could fire it's own "save" event?

In socket.io, we call those "pools" `Namespaces`

**Namespaces** can have their own uniquely named events or use common names, but only subscribers to a given namespace can 'hear' those events. As a client, you physically `connect()` to a namespace, which are presented as a route on the url
  * Default/General Namespace: `localhost:3000`
  * Codefellows Namespace: `localhost:3000/codefellows` 

**Rooms** are similar. Rather than connecting to a room directly as you do with a namespace, you first connect to a namespace and then request to the server that you `join` a room.  The accepted way to do this is by sending a join event to the server, and then the server will run the join command on behalf of the client.

client.js
```javascript
const instructor = io.connect('http://localhost:3000/codefellows');
instructor.emit('join','instructors', data => {
  console.log(data);
});
```

server.js
```javascript
  socket.on('join', (room, cb) => {
    socket.join(room);
    cb(`Joined ${room}`);
  });
```

Unlike pure events, both **rooms** and **namespaces** allow you to inspect the list of clients attached. 
