# Hooks API

## Learning Objectives

* Use the Hooks API to manage state in a functional component
* Interact with Context using Hooks
* Create custom hooks

## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review**
* :15 **Lightning Talk**
* Break
* :30 **CS/UI Concepts** -
* :20 **Code Review**
* Break
* :60 **Main Topic**


### Hooks

React hooks allow to to easily create and manage state in a **functional** component.

Hooks are JavaScript functions, but they impose additional rules:

* Hooks must be named with a `use` prefix (i.e. `useFishingPole`)
* Only call Hooks at the top level. Don't call Hooks inside loops, conditions, or nested functions.
* Only call Hooks from React function components. Don't call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks. We'll learn about them in a moment.)

**Built In Hooks**

`useState()` 

Returns a getter and setter for your state value

```javascript
 import React from 'react';
 import { useState } from 'react';
 
 function Counter() {
   const [clicks, setClicks] = useState(0);
 
   return (
     <div>
       <h2>Button has been clicked {clicks} time(s)</h2>
       <button type="button" onClick={() => setClicks(clicks + 1)}>
         Update Count
       </button>
     </div>
   );
 }
 
 export default Counter;
```

`useReducer()` 

An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you're familiar with Redux, you already know how this works.)

```javascript
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter({initialState}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}
```
