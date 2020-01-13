import React from 'react';
import { connect } from 'react-redux';

const History = (props) => {

  const styles = {
    changes: {
      position:'absolute',
      top:'2em',
      right:'2em',
    },
    history: {
      height:'300px',
      overflow:'auto',
    },
  };

  return (
    <div style={styles.changes}>
      <h2>Total Clicks: {props.history.length}</h2>
      <ul style={styles.history}>
        {props.history.reverse().map( (change,i) => <li key={i}>{change}</li>)}
      </ul>
    </div>
  );

};

const mapStateToProps = state => ({
  history: state.history,
});


export default connect(
  mapStateToProps,
)(History);

