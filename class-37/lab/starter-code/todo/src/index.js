import React from 'react';
import ReactDOM from 'react-dom';

import SettingsContext from './context/settings.js';

import App from './app.js';

class Main extends React.Component {
  render() {
    return (
      <SettingsContext>
        <App />
      </SettingsContext>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
