import React from 'react';

import ToDo from './components/todo/todo.js';
import Login from './components/auth/login.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Login />
        <ToDo />
      </>
    );
  }
}
