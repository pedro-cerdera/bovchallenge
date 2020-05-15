import {Types as WeatherSagaTypes} from '../sagas/weather';

const initialState = {
  requestDate: null,
  weathers: [],
  loading: false,
  error: null,
};

export const Types = {
  WEATHER_ADD: '@weather/ADD',
  WEATHER_SET_LOADING: '@weather/SET_LOADING',
  WEATHER_SET_ERROR: '@weather/SET_ERROR',
  WEATHER_RESET: '@weather/RESET',
};

export const Actions = {
  getWeathers: (coordinates) => ({
    type: WeatherSagaTypes.GET_WEATHERS,
    payload: coordinates,
  }),
};

export const WeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.WEATHER_ADD:
      return {
        ...state,
        weathers: action.payload,
      };
    case Types.WEATHER_SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case Types.WEATHER_SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case Types.WEATHER_RESET:
      return initialState;
    default:
      return state;
  }
};
