import React from "react";
import Form from "./form.js";
import People from "./people.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }
  handleSubmit = results => {
    this.setState({ results });
  };
  render() {
    return (
      <>
        <Form prompt="get starwars peeps" handler={this.handleSubmit} />
        <People results={this.state.results} />
      </>
    );
  }
}

export default App;
