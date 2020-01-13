const actions = {};
const initialState =  {name: 'Sam Sample' };

const reducer = ( state = initialState, action ) => {

  let {type, payload} = action;

  switch (type) {
  case 'CHANGE':
    return {name: Math.floor(Math.random() * payload) + 1};

  case 'RESET':
    return initialState;

  default:
    return state;
  }

};

actions.changeName = (payload) => {
  return {
    type: 'CHANGE',
    payload: payload,
  };
};

actions.resetName = (payload) => {
  return {
    type: 'RESET',
    payload: payload,
  };
};

export default reducer;
export {actions};
