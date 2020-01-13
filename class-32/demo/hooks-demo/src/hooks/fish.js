import React from 'react';

export default function useFishHook(fish) {
  let fishes = ['salmon', 'flounder'];
  return fishes.includes(fish) ? true : false;
}
