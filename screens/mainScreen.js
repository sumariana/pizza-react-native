import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

import PizzaSelector from '../component/pizzaSelector';
import SizeSelector from '../component/sizeSelector';
import ToppingSelector from '../component/toppingSelector';
import TotalPrice from '../component/totalPrice';

const MainScreen = props =>{
    return(        
        <ScrollView style={styles.container} >
            <View>
            <PizzaSelector
                onOpenDetail={ props.navigation.navigate('Detail') }
            />
            <SizeSelector
            />
            <ToppingSelector/>
            <TotalPrice/>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
      paddingTop: 30,
      backgroundColor: '#fff',
    },
  });

export default MainScreen;