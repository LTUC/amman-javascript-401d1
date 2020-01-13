import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import counterReducer from './counter.store.js';
import historyReducer from './history.store.js';

let reducers = combineReducers({
  counter: counterReducer,
  history: historyReducer,
});

const store = () => createStore(
  reducers,
  composeWithDevTools()
);
export default store;
