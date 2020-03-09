import React from 'react';
import { connect } from 'react-redux';

const Status = props => {
  let currentLeader = { name: 'no leader', votes: 0 };

  let leader = props.candidates.reduce((winning, record) => {
    let r = record.votes > winning.votes ? record : winning;
    return r;
  }, currentLeader);

  return (
    <section className="total-votes">
      <span>Current Leader: {leader.name}</span>
      <span>Total Votes: {props.votes.totalVotes}</span>
    </section>
  )
}

const mapStateToProps = state => ({
  votes: state.votes,
  candidates: state.candidates
});

export default connect(mapStateToProps)(Status);
