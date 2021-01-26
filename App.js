import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import MenuReducer from './store/reducers/menu';
import OrderReducer from './store/reducers/order';
import PizzaSelector from './component/pizzaSelector';
import SizeSelector from './component/sizeSelector';

const rootReducer= combineReducers({
  menus: MenuReducer,
  order: OrderReducer
})

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <ScrollView style={styles.container} >
        <View>
          <PizzaSelector/>
          <SizeSelector/>
        </View>
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#fff',
  },
});
