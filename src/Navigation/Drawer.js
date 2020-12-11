import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import TabsScreen from './Tabs';

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator headerMode="none" initialRouteName="Home">
    <Drawer.Screen name="Home" component={TabsScreen} />
  </Drawer.Navigator>
);

export default DrawerScreen;
