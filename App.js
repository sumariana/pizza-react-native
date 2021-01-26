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

const rootReducer= combineReducers({
  menus: MenuReducer,
  order: OrderReducer
})

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export default function App() {
  const [pizzaHasSelected,setPizzaHasSelected] = useState(false)
  const [pizzaSelected,setPizzaSelected] = useState()

  const pizzaSelection = selectedNumber => {
    setPizzaSelected(selectedNumber);
    setPizzaHasSelected(true);
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
