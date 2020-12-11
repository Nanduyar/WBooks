import 'react-native-gesture-handler';
import React, {useEffect, useMemo, useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SplashScreen from './src/Views/Splash';
import RootStackScreen from './src/Navigation/RootStack';
import {API_ENDPOINT} from './src/Utils/Routes';
import {AuthContext} from './src/Utils/Context';

const SIGN_IN_URL = `${API_ENDPOINT}/sign_in`;

const App = () => {
  const initialLoginState = {
    isLoading: true,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(() => {
    return {
      signIn: (first_name, last_name, email, age) => {
        let body = {
          first_name: first_name,
          last_name: last_name,
          email: email,
          age: age,
        };

        fetch(SIGN_IN_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        })
          .then((response) => response.json())
          .then(async (json) => {
            try {
              let userToken;
              userToken = 'fffast';
              await AsyncStorage.setItem('userToken', userToken);
              dispatch({type: 'REGISTER', token: userToken});
            } catch (e) {}
          })
          .catch((error) => {
            throw error;
          });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {}
        dispatch({type: 'LOGOUT'});
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {}
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={loginState.userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
