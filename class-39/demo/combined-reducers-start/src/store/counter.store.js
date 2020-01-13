const initialState = { value: 0, numChanges:0, changes:[] };

export default function reducer (state = initialState, action) {
  switch (action.type) {
  case 'INCREMENT':
    return { value: state.value + 1, numChanges: state.numChanges + 1, changes:[...state.changes, '+'] };
  case 'DECREMENT':
    return { value: state.value - 1, numChanges: state.numChanges + 1, changes:[...state.changes, '-'] };
  default:
    return state;
  }
}

// Action Creators

export const increment = () => {
  return {type: 'INCREMENT'};
};

export const decrement = () => {
  return {type: 'DECREMENT'};
};
