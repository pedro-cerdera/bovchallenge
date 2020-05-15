import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation} from '../../hooks';
import {Actions} from '../../reducers';

const WeatherForecastScreen = () => {
  const {coordinates} = useLocation();
  const {weathers} = useSelector((store) => ({
    weathers: store.WeatherReducer.weathers,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    if (coordinates) {
      dispatch(Actions.Weather.getWeathers(coordinates));
    }
  }, [coordinates, dispatch]);

  return (
    <View>
      <Text>{JSON.stringify(weathers)}</Text>
    </View>
  );
};

export default WeatherForecastScreen;
