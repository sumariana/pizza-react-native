import React from 'react';
import { View, StyleSheet,Image,Text,Dimensions } from 'react-native';
import { RadioButton } from 'react-native-paper';

const num = 3
const itemWidth = Dimensions.get('window').width

const SizeItem= props=>{
    
    return (
        <View style={styles.card}>
            <RadioButton
                    status={props.isSelected ? 'checked': 'unchecked'}
                    onPress={props.onSelect}
                    value={props.label}
                    disabled={props.isDisabled}
                    color='#FF1969'
                    />
            <Text>{props.label}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    card: {
        width: (itemWidth/num),
        height: 60,
        padding: 10,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',

    }
});
export default SizeItem;