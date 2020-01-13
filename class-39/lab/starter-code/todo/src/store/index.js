import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import todoReducer from './todo.store.js';

let reducers = combineReducers({
  todo: todoReducer,
});

const store = () => createStore(reducers, composeWithDevTools());
export default store;
