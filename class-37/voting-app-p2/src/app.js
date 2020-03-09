import React from 'react';
import Status from './components/status.js';
import Votes from './components/vote-counter.js';

import './style.scss';

export default props => {
  return (
    <>
      <Status />
      <Votes />
    </>
  )
}