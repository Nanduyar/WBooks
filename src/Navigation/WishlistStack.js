import React from 'react';
import {Image, Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import WishlistScreen from '../Views/Whishlist';

import {Colors} from '../Themes';

const WishlistStack = createStackNavigator();
const {width} = Dimensions.get('screen');
const ratio = width / 375; //375 is actual image width

const WishlistStackScreen = () => (
  <WishlistStack.Navigator>
    <WishlistStack.Screen
      name="Whishlist"
      component={WishlistScreen}
      options={{
        title: 'WISHLIST',
        headerTintColor: Colors.white,
        headerBackground: (props) => (
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
  </WishlistStack.Navigator>
);

export default WishlistStackScreen;
