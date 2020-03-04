import React from 'react';
import { LoginContext } from './context.js';
import { JsonWebTokenError } from 'jsonwebtoken';

const If = props => {
  return props.condition ? props.children : null;
}

class Login extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name] : e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.context.login(this.state.username, this.state.password);
    e.target.reset();
  }

  render() {
    return (
      <>
        <If condition={this.context.loggedIn}>
          <button onClick={this.context.logout}>Log Out!</button>
        </If>

        <If condition={!this.context.loggedIn}>
          <form onSubmit={this.handleSubmit}>
            <input name="username" onChange={this.handleChange} />
            <input name="password" onChange={this.handleChange} />
            <button>Log In!</button>
          </form>
        </If>
      </>
    )
  }
}

export default Login;