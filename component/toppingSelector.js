import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as orderActions from '../store/action/order';
import {FlatList,View,Text} from 'react-native';

import ToppingItem from './toppingItem';

const ToppingSelector = props => {

    const topping = useSelector(state=>state.menus.allTopping);
    const dispatch = useDispatch();
    const availableTopping = useSelector(state=>state.menus.availableToppings)
    const selectedTopping = useSelector(state=>state.order.toppings)
 
    return (
        <View>
        <Text style={{fontSize: 20, paddingStart: 20,paddingTop: 20}}>Topping</Text>
        <FlatList
          data={topping}
          numColumns={3}
          keyExtractor={item => item.id}
          renderItem={(itemData) => (
            <ToppingItem
             label = {itemData.item.title}
             isSelected = {selectedTopping.includes(itemData.item.id)}
             isDisabled = {!availableTopping.includes(itemData.item.id)}
             onSelect={()=>{
                 dispatch(orderActions.selectTopping(itemData.item))
                 dispatch(orderActions.countTotal())
             }}
            />
          )}
        />
      </View>
    );
};

export default ToppingSelector;