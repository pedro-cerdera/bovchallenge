import {all} from 'redux-saga/effects';
import weatherSagas from './weather';

export default function* root() {
  yield all([...weatherSagas]);
}
