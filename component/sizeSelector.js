import React,{ useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as orderActions from '../store/action/order';
import {FlatList,View,Text} from 'react-native';

import SizeItem from '../component/sizeItem';


const SizeSelector = props => {

  const size = useSelector(state => state.menus.allSize);
  const selectedPizza = props.pizzaSelectedId;
  const dispatch = useDispatch();
  const [selectedSize,setSelectedSize]=useState('-1');
  const [isSizeDisabled, setSizeDisabled]=useState(true);

  useEffect(() => {
    if(selectedPizza){
      setSizeDisabled(false)
      setSelectedSize('2')
      const itemInit = size[1]
      dispatch(orderActions.selectSize(itemInit))
      dispatch(orderActions.countTotal())
    }
  }, [selectedPizza,isSizeDisabled]);

  const onSelectSizeHandler = item =>{
    setSelectedSize(item.id)
    dispatch(orderActions.selectSize(item))
    dispatch(orderActions.countTotal())
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
             isDisabled = {isSizeDisabled}
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