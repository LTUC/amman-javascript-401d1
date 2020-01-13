import React from 'react';
import { SettingsContext } from '../settings/site-context.js';

class Content extends React.Component {
  static contextType = SettingsContext;

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <section>
          <div>
            <h1>{this.context.title}</h1>
            <div>
              <a href={`http://www.twitter.com/${this.context.twitter}`}>
                  @{this.context.twitter}
              </a>
            </div>
            <div>
              <a href={`mailto:${this.context.email}`}>
                {this.context.email}
              </a>
            </div>
          </div>

          <form onSubmit={this.handleSubmit}>
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
          </form>
        </section>
      </>
    );
  }
}

export default Content;
