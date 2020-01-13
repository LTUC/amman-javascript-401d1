import React from 'react';
import useFishHook from '../hooks/fish.js';

function Fish(props) {
  const isFish = useFishHook(props.fish);

  return (
    <h2>Is {props.fish} a fish? {isFish.toString()}</h2>
  );
}

export default Fish;
