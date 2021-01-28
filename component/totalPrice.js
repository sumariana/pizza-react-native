import React,{ useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as orderActions from '../store/action/order';
import * as menuACtions from '../store/action/menu';
import {FlatList,View,Text, StyleSheet, Button} from 'react-native';

import SizeItem from '../component/sizeItem';


const TotalPrice = props => {

    const totalPrice = useSelector(state=>state.order.totalPrice)
    const dispatch = useDispatch()
    
    const resetHandler=()=>{
        dispatch(menuACtions.resetItem())
    }
  
    return (
      <View style={styles.screen}>
        <Text style={{fontSize: 20}}>Grand Total ${totalPrice}</Text>
        <Button title='RESET' onPress={resetHandler} />
      </View>
    );
};

const styles = StyleSheet.create({
    screen :{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:20,
        paddingHorizontal:20

    }
});

export default TotalPrice;