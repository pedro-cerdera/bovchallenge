import moment from 'moment';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {HorizontalList} from '../../components/lists/HorizontalList';
import {weatherIcons} from '../../helpers';
import {FieldContainer} from '../containers';
import {Icon} from '../Icon';
import {TextSmall} from '../Text';

const WeatherItem = ({icon, date, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <FieldContainer>
      <Icon name={weatherIcons[icon.day]} size={30} />
      <TextSmall>{moment(date).format('DD/MM')}</TextSmall>
    </FieldContainer>
  </TouchableOpacity>
);

const WeathersList = ({weathers, onWeatherPress}) => (
  <HorizontalList
    data={weathers}
    renderItem={({item, index}) => (
      <WeatherItem {...item} onPress={() => onWeatherPress(index)} />
    )}
  />
);

export default WeathersList;
