const initialState = [];

export default function reducer (state = initialState, action) {
  switch (action.type) {
  case 'INCREMENT':
    return [...state, '+'];
  case 'DECREMENT':
    return [...state, '-'];
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
