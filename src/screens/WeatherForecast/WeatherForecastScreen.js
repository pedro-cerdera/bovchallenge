import React from 'react';
import {
  FeedbackCard,
  SafeAreaContainer,
  WeatherCard,
  WeathersList,
} from '../../components';
import {useWeatherForecastScreen} from './useWeatherForecastScreen';

const WeatherForecastScreen = () => {
  const [
    {weathers, currentWeather},
    {setCurrentWeather},
  ] = useWeatherForecastScreen();
  return (
    <SafeAreaContainer>
      {!weathers.length ? (
        <FeedbackCard />
      ) : (
        <>
          <WeatherCard weather={weathers[currentWeather]} />
          <WeathersList
            weathers={weathers}
            onWeatherPress={setCurrentWeather}
          />
        </>
      )}
    </SafeAreaContainer>
  );
};

export default WeatherForecastScreen;
