const initialState = {
  requestDate: null,
  weathers: [],
  isLoading: false,
  error: null,
};

export const Types = {
  WEATHER_ADD: '@weather/ADD',
  WEATHER_SET_LOADING: '@weather/SET_LOADING',
  WEATHER_SET_ERROR: '@weather/SET_ERROR',
  WEATHER_RESET: '@weather/RESET',
};

export const Actions = {};

export const WeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.WEATHER_RESET:
      return initialState;

    default:
      return state;
  }
};
