import React from 'react';
import {StatusBar} from 'react-native';
import {Redux} from './redux';
import {WeatherForecastScreen} from './screens';
import styleguide from './styleguide';

const App = () => {
  return (
    <Redux>
      <StatusBar
        barStyle="light-content"
        backgroundColor={styleguide.colors.background}
      />
      <WeatherForecastScreen />
    </Redux>
  );
};

export default App;
