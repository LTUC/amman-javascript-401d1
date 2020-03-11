import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';

function Main() {
  return (
    <App />
  )
}

const root = document.getElementById('root');
ReactDOM.render(<Main />, root);