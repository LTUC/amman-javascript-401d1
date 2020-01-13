import React from 'react';

import SettingsContext from './components/settings/site-context.js';
import ThemeContext from './components/settings/theme-context.js';
import Main from './main.js';

export default class App extends React.Component {
  render() {
    return (
      <ThemeContext>
        <SettingsContext>
          <Main />
        </SettingsContext>
      </ThemeContext>
    );
  }
}
