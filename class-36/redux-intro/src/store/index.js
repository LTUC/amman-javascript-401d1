import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counter from './votes.js';

let reducers = combineReducers({ counter });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();