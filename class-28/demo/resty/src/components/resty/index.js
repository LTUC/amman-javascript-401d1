import './resty.scss';

import React from 'react';
import superagent from 'superagent';
import ReactJson from 'react-json-view';

class RESTy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: 'get',
      header: {},
      body: {},
      history: {},
      headersVisible: false,
    };
  }

  handleChange = event => {
    let prop = event.target.name;
    let value = event.target.value;
    this.setState({ [prop]: value });
  };

  callAPI = event => {
    event.preventDefault();
    superagent('get', this.state.url)
      .set('Content-Type', 'application/json')
      .send(this.state.requestBody)
      .then(response => {
        let header = response.header;
        let body = response.body;
        this.setState({ header, body });
      })
      .catch(e => {
        let body = { error: e.message };
        let header = {};
        this.setState({ header, body });
      });
  };

  render() {
    return (
      <main>
        <section className="deck">
          <form onSubmit={this.callAPI}>
            <section id="url-entry">
              <input
                type="text"
                className="wide"
                name="url"
                placeholder="URL"
                value={this.state.url}
                onChange={this.handleChange}
              />
              <label>
                <button type="submit">Go!</button>
              </label>
            </section>
          </form>
          <div id="json">
            <ReactJson
              name="Headers"
              enableClipboard={false}
              collapsed={true}
              src={this.state.header}
            />
            <ReactJson
              name="Response"
              enableClipboard={false}
              collapsed={false}
              src={this.state.body}
            />
          </div>
        </section>
      </main>
    );
  }
}

export default RESTy;
