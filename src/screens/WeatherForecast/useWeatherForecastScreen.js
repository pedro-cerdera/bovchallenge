import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation, useAppState} from '../../hooks';
import {Actions} from '../../reducers';

export const useWeatherForecastScreen = () => {
  const [currentWeather, setCurrentWeather] = useState(0);
  const {coordinates} = useLocation();
  const {appState} = useAppState();
  const {weathers} = useSelector((store) => ({
    weathers: store.WeatherReducer.weathers,
    loading: store.WeatherReducer.loading,
    error: store.WeatherReducer.error,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    if (coordinates) {
      dispatch(Actions.Weather.getWeathers(coordinates));
    }
  }, [coordinates, dispatch, appState]);

  return [
    {
      weathers,
      currentWeather,
    },
    {
      setCurrentWeather,
    },
  ];
};
