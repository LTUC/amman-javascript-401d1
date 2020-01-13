import { createStore, combineReducers } from 'redux';

import doTheThingsReducer from './reducers.js';

let reducers = combineReducers({
  someStuff: doTheThingsReducer,
});

export default () => createStore(reducers);
