import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    autoRehydrate(),
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}