import React from 'react';
import { Route } from 'react-router-dom';

import List from './list';
import Home from './home.js';

const Main = props => {
  let stuff = ['john', 'cat', 'allie', 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let items = stuff.map((item, i) => <li key={i}>{item}</li>);

  return (
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/stuff" render={() => <List>{items}</List>} />
    </main>
  );
};

export default Main;
