import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../Views/Login';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen
      name="Login"
      component={LoginScreen}
      options={{title: 'Sign In'}}
    />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
