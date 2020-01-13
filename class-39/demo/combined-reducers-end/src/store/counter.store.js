const initialState = { value: 0 };

export default function reducer (state = initialState, action) {
  switch (action.type) {
  case 'INCREMENT':
    return { value: state.value + 1 };
  case 'DECREMENT':
    return { value: state.value - 1 };
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
