import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import thunk from './middleware/thunk.js';
import thunk from 'redux-thunk';

import reducer from './reducers.js';

let reducers = combineReducers({
  data: reducer,
});

const store = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
