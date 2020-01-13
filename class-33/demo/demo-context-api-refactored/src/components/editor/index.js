import React from 'react';
import { SettingsContext } from '../settings/site-context.js';
import { ThemeContext } from '../settings/theme-context.js';

import './editor.scss';

class Content extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  /**
   * When using multipled contexts, you must use
   * the .Consumer and return a function that
   * receives context.  Not Great
   *
   * The code below can be refactored to use
   * 2 components, each that can use contextType
   * independently.
   *
   * Later ... you can use the useContext() hook
   * to simplify it all.
   */
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

                  <ThemeContext.Consumer>
                    {theme => {
                      return (
                        <>
                          <h2>Design Settings</h2>

                          <label>
                            <span>Background Color</span>
                            <input
                              placeholder="background hex color"
                              name="background"
                              onChange={e =>
                                theme.changeBackgroundTo(e.target.value)
                              }
                            />
                          </label>

                          <label>
                            <span>Font Size</span>
                            <input
                              placeholder="Font Size"
                              name="fontSize"
                              onChange={e =>
                                theme.changeFontSizeTo(e.target.value)
                              }
                            />
                          </label>
                          <button>Save Settings</button>
                        </>
                      );
                    }}
                  </ThemeContext.Consumer>
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
