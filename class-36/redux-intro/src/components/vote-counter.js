import React from 'react';
import { connect } from 'react-redux';

import { increment, reset } from '../store/votes.js';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

const VotesCounter = props => {
  return (
    <section>
      <ul>
        {props.counter.candidates.map(person => {
          return <li onClick={() => props.increment(person.name)} key={person.name}>
            {person.name} - {person.votes}
          </li>
        })}
      </ul>
      <button onClick={props.reset}>Reset</button>
    </section>
  )
}

const mapStateToProps = state => ({
  counter: state.counter
})

// Old school way of mapping dispatchers to props
// const mapDispatchToProps = ({
//   increment: () => dispatch(increment()),
//   reset: () => dispatch(reset())
// });

const mapDispatchToProps = { increment, reset };

export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);

