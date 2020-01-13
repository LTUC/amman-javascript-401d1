# Event Driven Applications

## Learning Objectives

* Describe and use the node event system
* Implement the Observer pattern using Pub/Sub
* Create a modular, event based system.

## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review**
* :15 **Lightning Talk**
* Break
* :30 **CS/UI Concepts** -
* :20 **Code Review**
* Break
* :60 **Main Topic**

## UI Concept:
* Theme Builder!

## CS Concept:
* Events

## Main Topic:
* Event Driven Programming
  * Everything in JS is an object
  * Most actions in JS are event driven
    * UI Events
    * Express Routes
    * (soon) Model Lifecycle Hooks
    * (later) React ... everything
  * Now, we harness that power
  
### Emit Events
**"I just did something and I want the whole world to know about it"**

`express-server.js`

```
    let SQL = "DELETE FROM sometable WHERE id = $1"
    let values = [request.query.id];
    client.query(SQL, values)
      .then( results => {
        emit('delete', request.query.id);
        res.send('Record Deleted')
      });
```


**"Something happened that I need to care about and do something with"**

`some-other-module.js`

```
    events.on('delete', (data) => {
        sendEmail({
            to: 'admin@here.com',
            subject: 'Someone deleted part of the database',
            body: `Record id: ${data} was removed`
        });
    });
```
