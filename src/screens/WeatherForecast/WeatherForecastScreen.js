import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation} from '../../hooks';
import {Actions} from '../../reducers';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  DefaultSpacingContainer,
  SafeAreaContainer,
  CardContainer,
} from '../../components';

const WeatherForecastScreen = () => {
  const [currentWeather, setCurrentWeather] = useState(0);
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
    <SafeAreaContainer>
      <DefaultSpacingContainer>
        <CardContainer
          style={{flex: 1, alignItems: 'center', paddingVertical: 20}}>
          <Text style={{fontFamily: 'Poppins-Bold'}}>
            {weathers[currentWeather].date_br}
          </Text>
          <View
            style={{
              flex: 1,
              backgroundColor: 'tomato',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <View
              style={{
                height: 250,
                width: 250,
                borderRadius: 125,
                backgroundColor: 'green',
              }}>
              <Icon name="rocket" size={30} color="#900" />
            </View>
          </View>
          <View>
            <Text style={{fontFamily: 'Poppins-Bold'}}>
              {weathers[currentWeather].temperature.max}
            </Text>
          </View>
        </CardContainer>
      </DefaultSpacingContainer>
    </SafeAreaContainer>
  );
};

export default WeatherForecastScreen;
