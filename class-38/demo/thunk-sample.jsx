// Official THUNK: https://github.com/reduxjs/redux-thunk

// Ours /
export default store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);


// Action Functions

export function addThings(things) {

  return {
    type: ADD_ALL,
    payload: things
  }
}

export function fetchThings() {

  return dispatch => {

    fetch('https://internets-of-thing-api.herokuapp.com/api/v1/things')
      .then(function(response) {
        return response.json();
      })
      .then(function(things) {

        dispatch(addThings(things));

      });

  };
}
