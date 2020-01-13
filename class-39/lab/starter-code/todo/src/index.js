import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import SettingsContext from './context/settings.js';
import createStore from './store/';
import App from './app.js';

const store = createStore();

function Main() {
  return (
    <Provider store={store}>
      <SettingsContext>
        <App />
      </SettingsContext>
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
