import React, { useState, useEffect } from 'react';

const useEvents = event => {
  const [payload, setPayload] = useState();

  const send = message => {
    let e = new CustomEvent(event, { detail: message });
    window.dispatchEvent(e);
  };

  useEffect(() => {
    window.addEventListener(event, e => {
      setPayload(e.detail);
    });
  }, [event]);

  return [send, payload];
};

export default useEvents;
