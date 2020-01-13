import React from 'react';
import { useState, useEffect, useMemo } from 'react';

function App() {

  const [clicks, setClicks] = useState({ count:0});
  const [even, setEven] = useState(false);

  let memoizedValue = useMemo(() => {
    console.log('even changed', clicks.count, even);
    return even;
  }, [clicks.count, even]);

  // const callbackFunction = useCallback(() => {
  //   return clicks.count === 3;
  // }, [clicks.count]);

  useEffect( () => {
    document.title = `Hooks! ${clicks.count}`;
  });

  // Note the extra param here ([]) --- this effect only ever runs once, on initial mount
  // useEffect( () => {
  //   console.log('render', clicks);
  //   document.title = `Hooks! ${clicks}`;
  //   return(() => console.log('unmount', clicks));
  // }, []);

  const updateCounters = () => {
    let newCount = ++clicks.count;
    setClicks({count:newCount});
    setEven( clicks.count > 0  && clicks.count % 5 === 0 );
  };

  return (
    <div>
      <h2>Button has been clicked {clicks.count} time(s)</h2>
      <h2>Memoized Value {memoizedValue.toString()}</h2>
      <button type="button" onClick={updateCounters}>
        Update Clicks
      </button>
    </div>
  );
}

export default App;
