import React from 'react';

import Counter from './components/counter.js';
import History from './components/history.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Counter />
        <History />
      </>
    );
  }
}
