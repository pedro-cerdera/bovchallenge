import React from 'react';
import {StatusBar} from 'react-native';
import {Redux} from './redux';
import {WeatherForecastScreen} from './screens';

const App = () => {
  return (
    <Redux>
      <StatusBar barStyle="light-content" />
      <WeatherForecastScreen />
    </Redux>
  );
};

export default App;
