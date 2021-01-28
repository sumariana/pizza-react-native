import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../screens/mainScreen';
import Detail from '../screens/detailScreen';

const defaultNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? '#C39EAA' : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : 'black'
  };

const mainNavigator = createStackNavigator({
    Main : {
        screen : Main,
        navigationOptions:{
            header : null
        }
    },
    Detail: {
        screen: Detail
    }
},{
    defaultNavigationOptions: defaultNavOptions
});

export default createAppContainer(mainNavigator);
