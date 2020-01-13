import React from 'react';

import Settings from './settings-editor.js';
import Theme from './theme-editor.js';

import './editor.scss';

class Editor extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Settings />
        <Theme />
      </form>
    );
  }
}

export default Editor;
