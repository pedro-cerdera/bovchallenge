import {useEffect, useState} from 'react';
import {AppState} from 'react-native';

const useAppState = (initialAppState = 'background') => {
  const [appState, setAppState] = useState(initialAppState);

  useEffect(() => {
    AppState.addEventListener('change', setAppState);
    return () => AppState.removeEventListener('change', setAppState);
  }, []);

  return {
    appState,
    setAppState,
  };
};

export {useAppState};
