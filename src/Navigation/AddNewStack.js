import React from 'react';
import {Image, Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import AddNewScreen from '../Views/AddNew';
import {Colors} from '../Themes';

const AddNewStack = createStackNavigator();
const {width} = Dimensions.get('screen');
const ratio = width / 375; //375 is actual image width

const AddNewStackScreen = () => (
  <AddNewStack.Navigator>
    <AddNewStack.Screen
      name="Whishlist"
      component={AddNewScreen}
      options={{
        title: 'ADD NEW',
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
  </AddNewStack.Navigator>
);

export default AddNewStackScreen;
