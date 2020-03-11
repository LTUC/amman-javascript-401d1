import React from 'react';
import { Provider } from 'react-redux';
import People from './components/people.js';
import store from './store/index.js';

export default props => {
  return (
    <Provider store={store}>
      <People />
    </Provider>
  )
}