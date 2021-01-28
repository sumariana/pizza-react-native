import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';


import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, useSelector } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import MenuReducer from './store/reducers/menu';
import OrderReducer from './store/reducers/order';
import MainNavigator from './navigation/pizzaNavigator';

const rootReducer= combineReducers({
  menus: MenuReducer,
  order: OrderReducer
});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export default function App() {
  
  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );
};
