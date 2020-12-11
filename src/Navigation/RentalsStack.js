import React from 'react';
import {Image, Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import RentalsScreen from '../Views/Rentals';
import {Colors} from '../Themes';

const RentalsStack = createStackNavigator();
const {width} = Dimensions.get('screen');
const ratio = width / 375; //375 is actual image width

const RentalsStackScreen = () => (
  <RentalsStack.Navigator>
    <RentalsStack.Screen
      name="Rentals"
      component={RentalsScreen}
      options={{
        title: 'RENTALS',
        headerTintColor: Colors.white,
        headerBackground: (
          props, // App Logo
        ) => (
          <Image
            style={{
              width: width,
              height: 102 * ratio, //102 is actual height of image
            }}
            source={require('../Assets/General/bc_navbar.png')}
            resizeMode="contain"
          />
        ),
        headerTitleStyle: {flex: 1, textAlign: 'center'},
      }}
    />
  </RentalsStack.Navigator>
);

export default RentalsStackScreen;
