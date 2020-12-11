import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {Fonts} from '../../Themes';

export default function SuggestedBooks(props) {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={props.onPress}>
      <View>
        <View>
          <Image
            style={styles.image}
            source={
              props.image
                ? {
                    uri: props.image,
                  }
                : require('../../Assets/General/no_disponible.png')
            }
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>{props.title}</Text>
          <Text style={styles.textSubTitle}>{props.author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    backgroundColor: 'white',
    width: 160,
    height: 220,
    borderRadius: 12,
    elevation: 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: 130,
    marginTop: 15,
  },
  textContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  textTitle: {
    textAlign: 'center',
    fontWeight: Fonts.weight.bold,
  },
  textSubTitle: {
    textAlign: 'center',
  },
});
