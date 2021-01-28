
import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';


const DetailScreen = props =>{
    const pizzaData = props.navigation.getParam('data')
    return(        
       <Text>test</Text>
    );
};


const styles = StyleSheet.create({
    container: {

      backgroundColor: '#fff',
    },
  });

export default DetailScreen;