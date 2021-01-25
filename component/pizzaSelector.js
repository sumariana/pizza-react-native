import React,{ useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as orderActions from '../store/action/order';

const PizzaSelector = props => {

  const pizza = useSelector(state => state.menus.allPizza)
  const dispatch = useDispatch();
  const [selectedPizza,setSelectedPizza]=useState(-1)

  const onSelectPizzaHandler = item =>{
    setSelectedPizza(item.id)
    dispatch(orderActions.selectPizza(item))
  }

    return (
      <FlatList
        data={pizza}
        keyExtractor={item => item.id}
        renderItem={(itemData) => (
          <PizzaItem
            name ={itemData.item.label}
            price = {itemData.item.price}
            image = {itemData.item.value}
            isSelected = {itemData.item.id === selectedPizza}
            onSelect = {()=>{
              onSelectPizzaHandler(itemData.item)
            }}
          />
        )}
      />
    );
};

export default PizzaSelector;