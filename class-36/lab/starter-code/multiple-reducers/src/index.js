import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './style.scss';

import App from './components/app.js';

import createStore from './store/';
const store = createStore();

function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
