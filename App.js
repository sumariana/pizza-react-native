import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import MenuReducer from './store/reducers/menu';
import OrderReducer from './store/reducers/order';
import PizzaSelector from './component/pizzaSelector';
import SizeSelector from './component/sizeSelector';
import ToppingSelector from './component/toppingSelector';

const rootReducer= combineReducers({
  menus: MenuReducer,
  order: OrderReducer
})

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export default function App() {
  const [pizzaSelected,setPizzaSelected] = useState()
  const [pizzaTopping,setPizzaTopping]=useState()

  const pizzaSelection = selectedNumber => {
    setPizzaSelected(selectedNumber);
  };

  const pizzaToppingSelection = data =>{
    setPizzaTopping(data)
    //console.log(pizzaTopping)
  }

  return (
    <Provider store={store}>
      <ScrollView style={styles.container} >
        <View>
          <PizzaSelector
          selectedPizza = {pizzaSelection}
          availToppings = {pizzaToppingSelection}
          />
          <SizeSelector
          pizzaSelectedId={pizzaSelected}
          />
          <ToppingSelector/>
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
