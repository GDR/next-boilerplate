import { createStore } from 'redux';
import { reducers } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {
  return createStore(reducers, initialState, composeWithDevTools());
}
