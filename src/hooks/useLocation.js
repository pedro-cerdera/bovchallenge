import {useCallback, useEffect, useState} from 'react';
import RNLocation from 'react-native-location';

RNLocation.configure({
  distanceFilter: 5.0,
});

const useLocation = () => {
  const [coordinates, setCoordinates] = useState(null);

  const getCurrentPosition = useCallback(async () => {
    const granted = await RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
      },
    });
    if (granted) {
      const {latitude, longitude} = await RNLocation.getLatestLocation({
        timeout: 60000,
      });
      setCoordinates({latitude, longitude});
    }
  }, []);

  useEffect(() => {
    getCurrentPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {coordinates};
};

export {useLocation};
