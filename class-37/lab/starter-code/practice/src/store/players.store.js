let initialState = [
  {name:'john',team:'Mariners'},
  { name: 'zach', team: 'Wildcats' },
];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
  case 'GET':
    return {  };

  case 'POST':
    return [...state, payload];

  case 'PUT':
    return state.map( (record,idx) => idx===payload.id ? payload.record : record );

  case 'DELETE':
    return state.filter((record, idx) => idx !== payload);

  default:
    return state;
  }
};

export const get = payload => {
  return {
    type: 'GET',
    payload: payload,
  };
};

export const post = payload => {
  return {
    type: 'POST',
    payload: payload,
  };
};

export const put = payload => {
  return {
    type: 'PUT',
    payload: payload,
  };
};

export const destroy = payload => {
  return {
    type: 'DELETE',
    payload: payload,
  };
};
