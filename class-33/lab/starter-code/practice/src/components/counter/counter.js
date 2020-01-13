import React, {useState} from 'react';

const Count = () => {

  const [count, setCount] = useState(0);

  const styles = {
    container: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '40%',
    },
    counter: {
      display: 'inline-block',
      fontSize: '1em',
      border: '2px solid #444',
      borderRadius: '50%',
      lineHeight: '5em',
      textAlign: 'center',
      width: '5em',
    },
    button: {
      height: '3em',
    },
  };

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={() => setCount(count-1)}> - </button>
      <span style={styles.counter}>{count}</span>
      <button style={styles.button} onClick={() => setCount(count+1)}> + </button>
    </div>
  );
};

export default Count;
