import React from 'react';
import {weatherIcons} from '../../helpers';
import {
  SpacingContainer,
  CardContainer,
  FieldContainer,
  HorizontalContainer,
} from '../containers';
import {SubTitle, TextSmall} from '../Text';
import {Icon} from '../Icon';

const WeatherCard = ({weather}) => (
  <SpacingContainer>
    <CardContainer verticalSpacing>
      <FieldContainer>
        <SubTitle>{weather.date_br}</SubTitle>
      </FieldContainer>
      <FieldContainer circle size={250}>
        <Icon name={weatherIcons[weather.icon.day]} size={100} />
      </FieldContainer>
      <HorizontalContainer>
        <FieldContainer square size={75}>
          <SubTitle>{`${weather.temperature.min}°`}</SubTitle>
          <TextSmall>{'min'}</TextSmall>
        </FieldContainer>
        <FieldContainer square size={75}>
          <SubTitle>{`${weather.temperature.max}°`}</SubTitle>
          <TextSmall>{'max'}</TextSmall>
        </FieldContainer>
      </HorizontalContainer>
    </CardContainer>
  </SpacingContainer>
);

export default WeatherCard;
