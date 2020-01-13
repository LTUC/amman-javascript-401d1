import { createStore, combineReducers } from 'redux';

// import peopleReducer from "./person-reducer.js";
import peopleReducer from './person.store.js';

let reducers = combineReducers({
  person: peopleReducer,
});

export default () => createStore(reducers);
