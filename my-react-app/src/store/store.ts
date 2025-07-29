import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { userReducer } from './reducer';

export const store = createStore(userReducer, applyMiddleware(thunk));
