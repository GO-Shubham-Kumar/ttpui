import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import * as rootReducers from './reducers/index';
const reducers = combineReducers(rootReducers)
const store = configureStore({
  reducer : reducers, 
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    thunk
  })
})

export default store;
