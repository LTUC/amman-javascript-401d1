import React from 'react';
import { useState } from 'react';

function HooksCounter() {
  const [clicks, setClicks] = useState(0);
  const [factorOfFive, setFactorOfFive] = useState(false);

  const updateCounters = () => {
    let newCount = clicks + 1;
    setClicks(newCount);
    setFactorOfFive(newCount > 0 && newCount % 5 === 0);
  }

  return (
      <section>
        <p>The button has been clicked {clicks} times.</p>
        <p>Factor of Five: {factorOfFive.toString()}</p>
        <button onClick={updateCounters}>Click!</button>
      </section>
  )
}

export default HooksCounter;