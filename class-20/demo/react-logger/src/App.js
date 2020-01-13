import React, { Component } from 'react';

import Q from '@nmq/q/client';

class App extends Component {

  constructor(props) {
    super(props);
    const database = new Q('database');
    database.subscribe('create', this.create);
    this.state = { actions: [] }
  }

  create = (payload) => {
    this.setState( {actions:[...this.state.actions, payload]} );
  };

  render() {
    console.log(this.state);
    return (
      <ul>
        {this.state.actions.map( (action,i) => <li key={i}>{JSON.stringify(action)}</li>)}
      </ul>
    );
  }
}

export default App;
