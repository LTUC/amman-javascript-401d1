import React from 'react';
import LoginContext from './components/auth/context.js';
import Login from './components/auth/login.js';
import Auth from './components/auth/auth.js';

const Edit = props => {
  return (
    <Auth capability="update">
      <span>You can edit!</span>
    </Auth>
  )
}

const Delete = props => {
  return (
    <Auth capability="delete">
      <span>You can delete!</span>
    </Auth>
  )
}

class App extends React.Component {
  render() {
    return (
      <LoginContext>
        <Login />
        <Edit />
        <Delete />
      </LoginContext>
    )
  }
}

export default App;