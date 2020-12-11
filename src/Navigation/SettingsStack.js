import React from 'react';
import {Image, Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import SettingsScreen from '../Views/Settings';
import {Colors} from '../Themes';

const SettingsStack = createStackNavigator();
const {width} = Dimensions.get('screen');
const ratio = width / 375; //375 is actual image width

const SettingsStackScreen = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        title: 'SETTINGS',
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
  </SettingsStack.Navigator>
);

export default SettingsStackScreen;
