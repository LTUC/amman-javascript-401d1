import React from 'react';
import { SettingsContext } from '../settings/site-context.js';

class Content extends React.Component {
  static contextType = SettingsContext;
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>{this.context.title}</h1>
        <div>
          <a href={`http://www.twitter.com/${this.context.twitter}`}>
            @{this.context.twitter}
          </a>
        </div>
        <div>
          <a href={`mailto:${this.context.email}`}>{this.context.email}</a>
        </div>
      </div>
    );
  }
}

export default Content;
