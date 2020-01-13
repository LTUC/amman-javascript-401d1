import React from 'react';
import { useReducer, useEffect } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
  case 'increment':
    return { count: state.count + 1 };
  case 'decrement':
    return { count: state.count - 1 };
  default:
    throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect( () => {
    document.title = `Reducers! ${state.count}`;
  });

  return (
    <div>
      <h2>Reducer Based Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Update Counter
      </button>
    </div>
  );
}

export default App;
