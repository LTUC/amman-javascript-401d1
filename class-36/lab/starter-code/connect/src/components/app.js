import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo:'bar',
    };
  }

  handleChange = () => {
    this.setState({foo:Math.random()});
  }

  render() {
    return (
      <div onClick={this.handleChange}>
        {this.state.foo}
      </div>
    );
  }
}

export default App;