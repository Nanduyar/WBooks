import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LibraryStackScreen from '../Navigation/HomeStack';
import WishlistStackScreen from '../Navigation/WishlistStack';
import AddNewStackScreen from '../Navigation/AddNewStack';
import RentalsStackScreen from '../Navigation/RentalsStack';
import SettingsStackScreen from '../Navigation/SettingsStack';

import {Colors} from '../Themes';

const Tabs = createBottomTabNavigator();

const TabsScreen = () => (
  <Tabs.Navigator
    tabBarOptions={{
      activeTintColor: Colors.primary,
      inactiveTintColor: Colors.inactive,
    }}>
    <Tabs.Screen
      name="Library"
      component={LibraryStackScreen}
      options={{
        tabBarIcon: ({focused}) => {
          return focused ? (
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={require('../Assets/ToolBar/ic_library_active.png')}
              resizeMode="contain"
            />
          ) : (
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={require('../Assets/ToolBar/ic_library.png')}
              resizeMode="contain"
            />
          );
        },
      }}
    />
    <Tabs.Screen
      name="Wishlist"
      component={WishlistStackScreen}
      options={{
        tabBarIcon: ({focused}) => {
          return focused ? (
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={require('../Assets/ToolBar/ic_wishlist_active.png')}
              resizeMode="contain"
            />
          ) : (
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={require('../Assets/ToolBar/ic_wishlist.png')}
              resizeMode="contain"
            />
          );
        },
      }}
    />
    <Tabs.Screen
      name="Add New"
      component={AddNewStackScreen}
      options={{
        tabBarIcon: ({focused}) => {
          return focused ? (
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={require('../Assets/ToolBar/ic_add_new_active.png')}
              resizeMode="contain"
            />
          ) : (
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={require('../Assets/ToolBar/ic_add_new.png')}
              resizeMode="contain"
            />
          );
        },
      }}
    />
    <Tabs.Screen
      name="Rentals"
      component={RentalsStackScreen}
      options={{
        tabBarIcon: ({focused}) => {
          return focused ? (
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={require('../Assets/ToolBar/ic_myrentals_active.png')}
              resizeMode="contain"
            />
          ) : (
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={require('../Assets/ToolBar/ic_myrentals.png')}
              resizeMode="contain"
            />
          );
        },
      }}
    />
    <Tabs.Screen
      name="Settings"
      component={SettingsStackScreen}
      options={{
        tabBarIcon: ({focused}) => {
          return focused ? (
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={require('../Assets/ToolBar/ic_settings_active.png')}
              resizeMode="contain"
            />
          ) : (
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={require('../Assets/ToolBar/ic_settings.png')}
              resizeMode="contain"
            />
          );
        },
      }}
    />
  </Tabs.Navigator>
);

export default TabsScreen;
