import React from 'react';
import superagent from 'superagent';

class Form extends React.Component {

  handleSubmit = async e => {
    e.preventDefault();
    let data = await superagent.get('https://swapi.co/api/people/');
    let count = data.body.count;
    let people = data.body.results.reduce((list, person) => {
      list[person.name] = person.url;
      return list;
    }, {});

    this.props.handler(count, people);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button>{this.props.prompt}</button>
      </form>
    );
  }
}

export default Form;
