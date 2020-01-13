let initialState = {
  count: 0,
  polarity: null,
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
  case 'INCREMENT':
    console.log('incrementing...', state);
    return updateCounter(state.count + 1);

  case 'DECREMENT':
    return updateCounter(state.count - 1);

  case 'RESET':
    return initialState;

  default:
    return state;
  }
};

const updateCounter = count => {
  let polarity = count > 0 ? 'positive' : count < 0 ? 'negative' : '';
  return { count, polarity };
};
