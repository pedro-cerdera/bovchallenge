import React from 'react';
import {StatusBar} from 'react-native';
import {Redux} from './src/redux';
// import styleguide from './src/styleguide';

const App = () => {
  return (
    <Redux>
      <StatusBar
        barStyle="light-content"
        // backgroundColor={styleguide.colors.primary}
      />
    </Redux>
  );
};

export default App;
