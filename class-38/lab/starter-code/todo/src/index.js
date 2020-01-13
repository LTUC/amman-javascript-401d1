import React from 'react';
import ReactDOM from 'react-dom';

import SettingsContext from './context/settings.js';
import LoginContext from './components/auth/context.js';

import App from './app.js';

class Main extends React.Component {
  render() {
    return (
      <LoginContext>
        <SettingsContext>
          <App />
        </SettingsContext>
      </LoginContext>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
