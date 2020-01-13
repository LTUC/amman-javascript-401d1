import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import playersReducer from './players-reducer.js';

let reducers = combineReducers({
  players: playersReducer,
});

const store = () => createStore(reducers, composeWithDevTools());
export default store;
