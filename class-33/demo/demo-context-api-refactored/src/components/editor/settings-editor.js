import React from 'react';
import { SettingsContext } from '../settings/site-context.js';

class SettingsEditor extends React.Component {
  static contextType = SettingsContext;
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <>
        <h2>Site Settings</h2>
        <label>
          <span>Site Title</span>
          <input
            placeholder="Site Title"
            name="title"
            onChange={e => this.context.changeTitleTo(e.target.value)}
          />
        </label>

        <label>
          <span>Twitter Handle</span>
          <input
            placeholder="Twitter Handle"
            name="twitter"
            onChange={e => this.context.changeTwitterTo(e.target.value)}
          />
        </label>

        <label>
          <span>Email Address</span>
          <input
            placeholder="Email"
            name="title"
            onChange={e => this.context.changeEmailTo(e.target.value)}
          />
        </label>
      </>
    );
  }
}

export default SettingsEditor;
