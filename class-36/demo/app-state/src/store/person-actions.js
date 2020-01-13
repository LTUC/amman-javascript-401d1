export const changeName = payload => {
  return {
    type: 'CHANGE',
    payload: payload,
  };
};

export const resetName = payload => {
  return {
    type: 'RESET',
    payload: payload,
  };
};
