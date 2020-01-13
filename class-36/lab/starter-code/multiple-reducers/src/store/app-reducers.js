let initialState = { name: 'John' };

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
  case 'CHANGE':
    return { name: payload || Math.random() };

  default:
    return state;
  }
};
