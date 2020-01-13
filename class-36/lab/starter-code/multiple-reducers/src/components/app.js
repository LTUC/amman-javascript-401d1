import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/app-actions.js';

class App extends React.Component {

  changeMyName = () => {
    let words = ['foo','bar','baz'];
    let word = words[ Math.floor(Math.random()*words.length) ];
    this.props.handleChange(word);
  }

  render() {
    return (
      <React.Fragment>
        <div onClick={this.changeMyName}>
        NAME: {this.props.app.name}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleChange: (newName) => dispatch(actions.nameChanger(newName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
