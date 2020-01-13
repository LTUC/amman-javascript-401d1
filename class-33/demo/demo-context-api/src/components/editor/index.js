import React from 'react';

import EditorWithStaticContext from './static-context.js';
import EditorWithConsumerContext from './consumer-context.js';
import EditorWithFunctionalContext from './functional-context.js';

import './editor.scss';

class Content extends React.Component {

  render() {
    return (
      <>
        <h2>Static Context</h2>
        <EditorWithStaticContext/>
        <hr />
        <h2>Consumer Context</h2>
        <EditorWithConsumerContext/>
        <hr />
        <h2>Functional Context</h2>
        <EditorWithFunctionalContext/>
      </>
    );
  }
}

export default Content;
