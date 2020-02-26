import React from 'react';
import { Route } from 'react-router-dom';

import List from './list';
import Home from './home.js';

const Main = props => {
  let stuff = ['hat', 'box', 'fish', 'cool watch', 'turtle', 'green tea'];
  let items = stuff.map((item, i) => <li key={i}>{item}</li>);

  return (
    <main>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/stuff" render={() => <List>{items}</List>} />
    </main>
  )
}

export default Main;