import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions.js';

class Records extends React.Component {
  fetchData = e => {
    e.preventDefault();
    this.props.get();
  };
  render() {
    return (
      <>
        <button onClick={this.fetchData}>Get Teams</button>
        <ul>
          {this.props.data.results.map((record, idx) => (
            <li key={idx}>{record.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch, getState) => ({
  get: () => dispatch(actions.getRemoteData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Records);
