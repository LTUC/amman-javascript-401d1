import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';

import playersReducer from './players.store.js';

let reducers = combineReducers({
  players: playersReducer,
  form: formReducer,
});

const store = () => createStore(reducers, composeWithDevTools());

export default store;
