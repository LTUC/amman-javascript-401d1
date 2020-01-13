let initialState = { foo: 'bar' };

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
  case 'CHANGE':
    return { foo: Math.random() };

  default:
    return state;
  }
};
