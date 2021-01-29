
import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';


const DetailScreen = props =>{
    const pizzaData = props.navigation.getParam('data')
    return(        
        <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: pizzaData.value}}/>
        </View>
    );
};


const styles = StyleSheet.create({
    imageContainer:{
        width:'100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width:'100%',
        aspectRatio: 1,
    }
  });

export default DetailScreen;