import { createStore, combineReducers } from 'redux';

import appReducer from './app-reducers.js';

let reducers = combineReducers({
  app: appReducer,
});

export default () => createStore(reducers);
