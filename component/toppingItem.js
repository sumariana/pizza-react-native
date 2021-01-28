import React from 'react';
import { View, StyleSheet,Image,Text,Dimensions } from 'react-native';
import { CheckBox } from 'react-native-elements';

const num = 3
const itemWidth = Dimensions.get('window').width

const ToppingItem= props=>{
    
    return (
        <View style={styles.card}>
            <CheckBox
                containerStyle={styles.checkBox}
                checked={props.isSelected}
                onPress={props.onSelect}
                disabled={props.isDisabled}
                title={props.label}
                checkedColor='#FF1969'
                uncheckedColor = {props.isDisabled ? 'gray' : 'black'}
                textStyle={{color: props.isDisabled ?'gray' : 'black',fontSize:12}}
                />
        </View>
    );
};

const styles=StyleSheet.create({
    card: {
        width: (itemWidth/num),
        height: 60,
        padding: 10
    },
    checkBox:{
        backgroundColor:'transparent',
        borderColor:'white',
        alignItems:'flex-start',
        justifyContent:'center'
    }
});
export default ToppingItem;