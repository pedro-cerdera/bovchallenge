import Reducers from '../reducers';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootSagas from '../sagas';
const config = {
  key: 'root',
  storage: AsyncStorage,
};

import {middlewares, sagaMiddleware} from './middlewares';

const reducers = combineReducers({
  ...Reducers,
});

const persistedReducers = persistReducer(config, reducers);

const compositions = [applyMiddleware(...middlewares)];

const composer = compose(...compositions);

const store = createStore(persistedReducers, composer);

sagaMiddleware.run(rootSagas);

let persistor = persistStore(store);

export {store, persistor};
