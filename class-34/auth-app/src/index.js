import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';

class Main extends React.Component {
  render() {
    return (
      <App />
    )
  }
}

const root = document.getElementById('root');
ReactDOM.render(<Main />, root);