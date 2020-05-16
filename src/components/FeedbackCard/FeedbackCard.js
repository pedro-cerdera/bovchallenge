import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
// import {CardContainer, SpacingContainer, SubTitle} from '../../components';
import {
  CenteredContainer,
  SpacingContainer,
  CardContainer,
} from '../containers';
import {SubTitle} from '../Text';

const FeedbackCard = () => {
  const {loading, error} = useSelector((store) => ({
    loading: store.WeatherReducer.loading,
    error: store.WeatherReducer.error,
  }));

  return (
    <SpacingContainer>
      <CardContainer>
        <CenteredContainer>
          {loading ? (
            <ActivityIndicator size={'large'} />
          ) : error ? (
            <SubTitle>Ocoreu algum problema</SubTitle>
          ) : (
            <SubTitle>Nenhuma previsão de tempo detectada</SubTitle>
          )}
        </CenteredContainer>
      </CardContainer>
    </SpacingContainer>
  );
};

export default FeedbackCard;
