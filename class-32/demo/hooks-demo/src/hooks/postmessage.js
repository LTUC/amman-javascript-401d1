import React, { useEffect } from 'react';

const usePostMessage = handler => {
  const send = payload => {
    window.postMessage(payload, '*');
  };

  useEffect(() => {
    const _handleEvent = payload => {
      handler && handler(payload.data);
    };
    window.addEventListener('message', _handleEvent, false);
  }, [handler]);

  return [send];
};

export default usePostMessage;
