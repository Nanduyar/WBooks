import React from 'react';
import {StyleSheet, View, Image, ImageBackground} from 'react-native';

export default function SplashScreen() {
  const background = require('../../Assets/General/bc_inicio.png');

  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Image source={require('../../Assets/General/ic_group.png')} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  section: {alignContent: 'center', alignItems: 'center'},
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
