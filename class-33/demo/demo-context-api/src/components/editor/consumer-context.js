import React from 'react';
import { SettingsContext } from '../settings/site-context.js';

class Content extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <section>
        <SettingsContext.Consumer>
          {settings => {
            return (
              <>
                <div>
                  <h1>{settings.title}</h1>
                  <div>
                    <a href={`http://www.twitter.com/${settings.twitter}`}>
                        @{settings.twitter}
                    </a>
                  </div>
                  <div>
                    <a href={`mailto:${settings.email}`}>{settings.email}</a>
                  </div>
                </div>

                <form onSubmit={this.handleSubmit}>
                  <h2>Site Settings</h2>
                  <label>
                    <span>Site Title</span>
                    <input
                      placeholder="Site Title"
                      name="title"
                      onChange={e => settings.changeTitleTo(e.target.value)}
                    />
                  </label>

                  <label>
                    <span>Twitter Handle</span>
                    <input
                      placeholder="Twitter Handle"
                      name="twitter"
                      onChange={e => settings.changeTwitterTo(e.target.value)}
                    />
                  </label>

                  <label>
                    <span>Email Address</span>
                    <input
                      placeholder="Email"
                      name="title"
                      onChange={e => settings.changeEmailTo(e.target.value)}
                    />
                  </label>
                </form>
              </>
            );
          }}
        </SettingsContext.Consumer>
      </section>
    );
  }
}

export default Content;
