import React from 'react';
import { View, StyleSheet,Image,Text,Dimensions } from 'react-native';
import { Checkbox } from 'react-native-paper';

const num = 3
const itemWidth = Dimensions.get('window').width

const ToppingItem= props=>{
    
    return (
        <View style={styles.card}>
            <Checkbox
                    status={props.isSelected ? 'checked': 'unchecked'}
                    onPress={props.onSelect}
                    value={props.label}
                    disabled={props.isDisabled}
                    color='#FF1969'
                    />
            <Text style={{flex:1}}>{props.label}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    card: {
        width: (itemWidth/num),
        height: 60,
        padding: 10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
});
export default ToppingItem;