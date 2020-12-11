import React from 'react';
import {Image, Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from '../Views/Main';
import BookDetailScreen from '../Views/BookDetail';
import {Colors} from '../Themes';

const HomeStack = createStackNavigator();
const {width} = Dimensions.get('screen');
const ratio = width / 375; //375 is actual image width

const LibraryStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Main"
      component={MainScreen}
      options={{
        title: 'LIBRARY',
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
    <HomeStack.Screen
      name="BookDetail"
      component={BookDetailScreen}
      options={{
        title: 'BOOK DETAIL',
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
  </HomeStack.Navigator>
);

export default LibraryStackScreen;
