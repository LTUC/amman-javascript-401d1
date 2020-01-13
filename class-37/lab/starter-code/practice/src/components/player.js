import React from 'react';
import { connect } from 'react-redux';

import PlayerForm from './player-form.js';
import * as actions from '../store/players.store.js';

console.log(actions);

class Player extends React.Component {

  handleSubmit = (formData) => {
    if (parseInt(this.props.id) >= 0) {
      this.props.handlePut({ id: this.props.id, record: formData });
    }
    else {
      this.props.handlePost(formData);
    }
  }

  render() {

    console.log(this.props.players[this.props.id]);
    return (
      <div>
        <h3>Edit Player {this.props.id}</h3>
        <PlayerForm
          initialValues={this.props.players[this.props.id]}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  players: state.players,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handlePost: payload => dispatch(actions.post(payload)),
  handlePut: payload => dispatch(actions.put(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
