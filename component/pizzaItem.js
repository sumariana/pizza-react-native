import React from 'react';
import { View, StyleSheet,Image,Text,Dimensions } from 'react-native';
import { RadioButton } from 'react-native-paper';

import Card from '../component/Card';

const num = 3
const itemWidth = Dimensions.get('window').width

const PizzaItem= props=>{
    
    return (
        <View style={{...styles.card, padding: 10}}>
            <Card >
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: props.image}}/>
                </View>
                <View style={styles.content}>
                    <Text>{props.name}</Text>
                    <Text>${props.price.toFixed(0)}</Text>
                    <RadioButton
                    status={props.isSelected ? 'checked': 'unchecked'}
                    onPress={props.onSelect}
                    value={props.name}
                    />
                </View>
            </Card>
        </View>
    );
};

const styles=StyleSheet.create({
    card: {
        width: (itemWidth/num),
        height: 200
    },
    imageContainer:{
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
        width: '100%',
        height: '50%',
    },
    image:{
        width: "100%",
        height: "100%"
    },
    content:{
        height:'50%',
        alignItems:'center',
        justifyContent:'center',
        padding: 10
    }
});
export default PizzaItem;