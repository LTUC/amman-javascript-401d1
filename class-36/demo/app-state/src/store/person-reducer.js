let initialState = { name: 'Sam Sample' };

export default ( state = initialState, action ) => {

  /*
    {
      type: 'GET',
      payload: 15
    }
  */

  let {type, payload} = action;

  switch(type) {
  case 'CHANGE':
    console.log(payload);
    return { name: Math.floor(Math.random() * payload) + 1 };

  case 'RESET':
    return initialState;

  default:
    return state;
  }

};
