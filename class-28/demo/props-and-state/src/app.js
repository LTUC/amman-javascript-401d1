import React from 'react';

import Form from './form.js';

import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
    };
  }

  handleForm = (count, results) => {
    this.setState({ count, results });
  };

  render() {
    return (
      <>
        <Form prompt="Get some Star Wars Folks..." handler={this.handleForm} />
        <ul>
          {Object.keys(this.state.results).map((key, idx) => {
            return (
              <li key={idx}>
                <a href={this.state.results[key]}>{key}</a>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
