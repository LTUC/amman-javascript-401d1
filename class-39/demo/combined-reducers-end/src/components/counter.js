import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/counter.store.js';

const Counter = (props) => {

  const styles = {
    counter: {
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
  };

  return (
    <div style={styles.counter}>
      <button onClick={props.decrement}>-</button>
      <h2>Current Value: {props.counter.value} ({props.history.length})</h2>
      <button onClick={props.increment}>+</button>
    </div>
  );
};

const mapStateToProps = state => ({
  counter: state.counter,
  history: state.history,
});

const mapDispatchToProps = (dispatch, getState) => ({
  increment: () => dispatch(actions.increment()),
  decrement: () => dispatch(actions.decrement()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

