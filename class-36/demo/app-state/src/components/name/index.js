import React from 'react';
import { connect } from 'react-redux';

class Name extends React.Component {

  render() {
    return (
      <h2>{this.props.person.name}</h2>
    );
  }

}

const mapStateToProps = state => ({
  person: state.person,
});

const mapDispatchToProps = (dispatch, getState) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Name);