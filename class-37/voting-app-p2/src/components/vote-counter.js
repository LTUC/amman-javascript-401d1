import React from 'react';
import { connect } from 'react-redux';
import { increment, disable, reset } from '../store/candidates.js';

const VotesCounter = props => {
  return (
    <section className="votes">
      <table>
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {props.candidates.map(person  => 
            <tr
              className={person.disable ? 'disabled' : ''} 
              onClick={() => person.disable ? {} : props.increment(person)} key={person} 
              onDoubleClick={() => props.disable(person)}
              >
                <td>{person.name}</td>
                <td>{person.votes}</td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={props.reset}>Reset</button>
    </section>
  )
}

const mapStateToProps = state => ({
  candidates: state.candidates
});

const mapDispatchToProps = { increment, disable, reset };

export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);