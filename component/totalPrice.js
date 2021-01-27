import React,{ useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as orderActions from '../store/action/order';
import {FlatList,View,Text} from 'react-native';

import SizeItem from '../component/sizeItem';


const TotalPrice = props => {

    const totalPrice = useSelector(state=>state.order.totalPrice)
  
    return (
      <View>
        <Text style={{fontSize: 20, paddingStart: 20,paddingTop: 20}}>Grand Total ${totalPrice}</Text>
      </View>
    );
};

export default TotalPrice;