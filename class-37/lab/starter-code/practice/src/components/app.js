import React from 'react';
import { connect } from 'react-redux';

import Player from './player.js';

import * as actions from '../store/players.store.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:null,
    };
  }

  deletePlayer = (id) => {
    this.props.handleDelete(id);
  }

  editPlayer = (id) => {
    this.setState({id});
  }

  render() {
    return (
      <div>
        <h2>Players</h2>
        <ul>
          {this.props.players.map( (player,idx) =>
            <li key={idx}>
              {player.name}
              <button onClick={() => this.editPlayer(idx)}>Edit</button>
              <button onClick={() => this.deletePlayer(idx)}>Delete</button>
            </li>
          )}
        </ul>
        <Player id={this.state.id} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleGet: () => dispatch(actions.get()),
  handleDelete: (id) => dispatch(actions.destroy(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
