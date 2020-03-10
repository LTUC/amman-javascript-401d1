let api = 'https://api-js401.herokuapp.com/api/v1/teams';

export const getRemoteData = () => dispatch => {
  return fetch(api)
    .then(results => results.json())
    .then(records => {
      dispatch(getAction(records));
    })
}
// just so you can see an alternate structure for making an async request:

export const putRemoteData = (id, data) => async dispatch => {
  let url = `${api}/${id}`;
  let results = await fetch(url, {
    method: 'put',
    body: JSON.stringify(data)
  });
  dispatch(getRemoteData);
  let record = await results.json();
  // dispatch(getAction(record));
}

export const getAction = payload => {
  return {
    type: 'GET',
    payload: payload
  }
}