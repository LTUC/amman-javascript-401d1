import React from 'react';
import { If } from '../if';

export default props => (
  <React.Fragment>
    <ul className="list">{props.children}</ul>
    <If condition={props.children.length > 5}>
      <div>Cool, that's a bunch of list items</div>
    </If>
  </React.Fragment>
);