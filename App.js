import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, useSelector } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import MenuReducer from './store/reducers/menu';
import OrderReducer from './store/reducers/order';
import PizzaSelector from './component/pizzaSelector';
import SizeSelector from './component/sizeSelector';
import ToppingSelector from './component/toppingSelector';
import TotalPrice from './component/totalPrice';

const rootReducer= combineReducers({
  menus: MenuReducer,
  order: OrderReducer
})

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export default function App() {
  const [pizzaSelected,setPizzaSelected] = useState()

  const pizzaSelection = selectedNumber => {
    setPizzaSelected(selectedNumber);
  };


  return (
    <Provider store={store}>
      <ScrollView style={styles.container} >
        <View>
          <PizzaSelector
          selectedPizza = {pizzaSelection}
          />
          <SizeSelector
          pizzaSelectedId={pizzaSelected}
          />
          <ToppingSelector/>
          <TotalPrice/>
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
