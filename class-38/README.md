# Remote APIs

## Learning Objectives

* Understand and implement `thunk` middleware
* Perform asynchronous redux actions
* Take advantage of lifecycle hooks

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
* `<List />` component

## Main Topic:
Using Redux actions to connect to remote APIs via Thunk Middleware

Normally, action generators return a function, like this:

```javascript
const get = (payload) => {
  return {
    type: 'GET',
    payload: payload
  }
}
```

But often, you'll need your actions to do some asynchronous action before you dispatch it to the reducer. For example, you may need to get something from a remote api.

In this case, we want to set it up like this, where the action you dispatch from your React App returns a function, not an actual action object, which is what Redux **expects** and **requires**

```javascript
let api = 'https://api.mockable.io/api/v1/stuff';

export const get = () => dispatch => {
  return utils.fetchData(api).then(records => {
    dispatch(getAction(records));
  });
};

const getAction = payload => {
  return {
    type: 'GET',
    payload: payload,
  };
};
```

So, we will implement a new piece of middleware, called a "thunk", which inspects every dispatched action and then either lets it go through (in the case of a normal action that returns an object) or it processes the function and then dispatches what that function returns.

Notice in the example above, that the function we ran for the action is curried, and receives `dispatch()`, which it calls with the payload it got from the server.

**What does thunk middleware look like?**

```javascript
export default store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);
```

At its base level, this is all we really need.  However, we're going to be using the `redux-thunk` npm module in our production applications, as it provides more stability and error checking for us.
