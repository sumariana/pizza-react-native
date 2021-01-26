import React,{ useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as orderActions from '../store/action/order';
import {FlatList,View,Text} from 'react-native';

import PizzaItem from '../component/pizzaItem';

const PizzaSelector = props => {

  const pizza = useSelector(state => state.menus.allPizza)
  const dispatch = useDispatch();
  const [selectedPizza,setSelectedPizza]=useState(-1)

  const onSelectPizzaHandler = item =>{
    setSelectedPizza(item.id)
    dispatch(orderActions.selectPizza(item))
    props.selectedPizza(item.id)
  }

    return (
      <View>
        <Text style={{fontSize: 20, paddingStart: 20}}>Pizza</Text>
        <FlatList
          data={pizza}
          numColumns={3}
          keyExtractor={item => item.id}
          renderItem={(itemData) => (
            <PizzaItem
              name ={itemData.item.label}
              price = {itemData.item.price}
              image = {itemData.item.value}
              isSelected = {itemData.item.id === selectedPizza ? true : false}
              onSelect = {()=>{
                onSelectPizzaHandler(itemData.item)
              }}
            />
          )}
        />
      </View>
    );
};

export default PizzaSelector;