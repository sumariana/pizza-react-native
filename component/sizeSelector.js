import React,{ useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as orderActions from '../store/action/order';
import {FlatList,View,Text} from 'react-native';

import SizeItem from '../component/sizeItem';


const SizeSelector = props => {

  const size = useSelector(state => state.menus.allSize)
  const selectedPizza = useSelector(state=>state.order.pizza)
  const dispatch = useDispatch();
  const [selectedSize,setSelectedSize]=useState(-1)
  const [isSizeEnable, setSizeEnable]=useState(false)

  // useEffect(() => {
  //   if(selectedPizza)
  //       setSizeEnable(true)
  // }, [selectedPizza]);

  const onSelectSizeHandler = item =>{
      setSelectedSize(item.id)
    //dispatch(orderActions.selectPizza(item))
  }

    return (
      <View>
        <Text style={{fontSize: 20, paddingStart: 20,paddingTop: 20}}>Size</Text>
        <FlatList
          data={size}
          numColumns={3}
          keyExtractor={item => item.id}
          renderItem={(itemData) => (
            <SizeItem
             label = {itemData.item.label}
             isSelected = {itemData.item.id === selectedSize ? true : false}
             isEnabled = {isSizeEnable}
             onSelect={()=>{
                 onSelectSizeHandler(itemData.item)
             }}
            />
          )}
        />
      </View>
    );
};

export default SizeSelector;