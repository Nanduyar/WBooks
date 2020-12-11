import React from 'react';
import {StyleSheet, View} from 'react-native';
import ContainedButton from '../../Components/ButtonForm';
import {AuthContext} from '../../../src/Utils/Context';

export default function SettingsScreen() {
  const {signOut} = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <ContainedButton label={'LOGOUT'} onPress={() => signOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    marginTop: 50,
    alignItems: 'center',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
  },
});
