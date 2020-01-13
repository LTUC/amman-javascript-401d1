import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import counterReducer from './counter.store.js';

let reducers = combineReducers({
  counter: counterReducer,
});

const store = () => createStore(
  reducers,
  composeWithDevTools()
);
export default store;
