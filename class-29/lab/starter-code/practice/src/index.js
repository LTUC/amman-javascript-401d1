import React from 'react';
import ReactDOM from 'react-dom';

import content from './content.json';
import Page from './components/page.js';


const App = (props) => {
  return <Page content={content} />;
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
