/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import configureStore from './store/configureStore';

import App from './App';

const store = configureStore();
persistStore(store);

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('navigationTest', () => App);
