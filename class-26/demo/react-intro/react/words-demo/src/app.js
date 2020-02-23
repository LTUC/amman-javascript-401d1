import React from 'react';
import './app.scss';

// dummy component - it is also a functional component
const Header = () => {
  return (
    <header className="words-app">
      <h1>Words App - React Land</h1>
    </header>
  )
}

// also a dummy component and functional component
const Footer = () => {
  return (
    <footer>my cool footer</footer>
  )
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = {
      words: 'nothing to see here'
    }
  }

  handleChange = e => {
    let words = e.target.value;
    this.setState({ words });
    console.log('__STATE__', this.state);
  }

  handleClick = e => {
    e.preventDefault();
    let words = this.state.words.split('').reverse().join('');
    this.setState({ words });
  }

  render() {
    return (
      <section>
        <h3>{this.state.words}</h3>
        <input onChange={this.handleChange} />
        <button onClick={this.handleClick}>click for words</button>
      </section>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Main />
        <Main />
        <Main />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
