import React from 'react';
import { connect } from 'react-redux';

// import * as actions from '../../store/person-actions.js';
import {actions} from '../../store/person.store.js';

import styles from './app.module.scss';

console.log(actions);

class Changer extends React.Component {
  render() {
    return (
      <section className={styles.app}>
        <div>{this.props.person.name}</div>
        <button onClick={() => this.props.handleChange(15)}>Change It</button>
        <button onClick={this.props.handleReset}>Reset</button>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  person: state.person,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleChange: num => dispatch(actions.changeName(num)),
  handleReset: () => dispatch(actions.resetName()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Changer);
