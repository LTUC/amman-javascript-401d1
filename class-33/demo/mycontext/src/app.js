import React from 'react';
import './app.scss'
import Main from './main';
import SettingsProvider from './context/site.js'
import ThemeProvider from './context/theme.js'
function App() {
  return (
    <>
  <SettingsProvider>
    <ThemeProvider>
       <Main/>
    </ThemeProvider>
  </SettingsProvider>
    </>
  );
}

export default App;
