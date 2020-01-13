import React from 'react';
import { ThemeContext } from '../settings/theme-context.js';

class Content extends React.Component {
  static contextType = ThemeContext;

  render() {
    return (
      <>
        <h2>Design Settings</h2>

        <label>
          <span>Background Color</span>
          <input
            placeholder="background hex color"
            name="background"
            onChange={e => this.context.changeBackgroundTo(e.target.value)}
          />
        </label>

        <label>
          <span>Font Size</span>
          <input
            placeholder="Font Size"
            name="fontSize"
            onChange={e => this.context.changeFontSizeTo(e.target.value)}
          />
        </label>
      </>
    );
  }
}

export default Content;
