import React, {useContext} from 'react';
import { SettingsContext } from '../settings/site-context.js';

const Content = (props) => {

  const context = useContext(SettingsContext);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <section>
        <div>
          <h1>{context.title}</h1>
          <div>
            <a href={`http://www.twitter.com/${context.twitter}`}>
                @{context.twitter}
            </a>
          </div>
          <div>
            <a href={`mailto:${context.email}`}>
              {context.email}
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <h2>Site Settings</h2>
          <label>
            <span>Site Title</span>
            <input
              placeholder="Site Title"
              name="title"
              onChange={e => context.changeTitleTo(e.target.value)}
            />
          </label>

          <label>
            <span>Twitter Handle</span>
            <input
              placeholder="Twitter Handle"
              name="twitter"
              onChange={e => context.changeTwitterTo(e.target.value)}
            />
          </label>

          <label>
            <span>Email Address</span>
            <input
              placeholder="Email"
              name="title"
              onChange={e => context.changeEmailTo(e.target.value)}
            />
          </label>
        </form>
      </section>
    </>
  );
};

export default Content;
