import {put, takeLatest, call} from 'redux-saga/effects';

import {Types as WeatherTypes} from '../reducers/weather';
import resources from '../resources';
import {GET_WEATHERS} from './Types';

function* fetchWeathers({payload}) {
  yield put({type: WeatherTypes.WEATHER_SET_LOADING, payload: true});
  const {data} = yield call(
    resources.Weather.getWeathers,
    7,
    payload.latitude,
    payload.longitude,
  );
  if (data?.error) {
    yield put({type: WeatherTypes.WEATHER_SET_ERROR, payload: data?.error});
  } else {
    yield put({type: WeatherTypes.WEATHER_ADD, payload: data?.data});
  }
  yield put({type: WeatherTypes.WEATHER_SET_LOADING, payload: false});
}

function* getWeathers() {
  yield takeLatest(GET_WEATHERS, fetchWeathers);
}

export default [getWeathers()];
