import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions.js';

class Counter extends React.Component {
  render() {
    let classes = ['counter', this.props.counter.polarity].join(' ');
    return (
      <>
        <h1>Counter</h1>
        <button className="decrement" onClick={this.props.decrement}>
          -
        </button>
        <span className={classes}>{this.props.counter.count}</span>
        <button className="increment" onClick={this.props.increment}>
          +
        </button>
        <div>
          <button className="reset" onClick={this.props.reset}>
            Reset Counter
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch, getState) => ({
  increment: () => dispatch(actions.incrementCounter()),
  decrement: () => dispatch(actions.decrementCounter()),
  reset: () => dispatch(actions.resetCounter()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
