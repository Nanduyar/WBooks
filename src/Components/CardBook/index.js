import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {Colors, Fonts} from '../../Themes';

export default function CardBook(props) {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={props.image ? styles.image : styles.image_not_available}
            source={
              props.image
                ? {
                    uri: props.image,
                  }
                : require('../../Assets/General/no_disponible.png')
            }
          />
        </View>
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.textTitle}>{props.title}</Text>
            <Text style={styles.textSubTitle}>{props.author}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  cardContainer: {
    margin: '2%',
    backgroundColor: 'white',
    width: '96%',
    height: 170,
    borderRadius: 12,
    elevation: 2,
  },
  infoContainer: {
    width: '70%',
    padding: 15,
    marginLeft: 15,
  },
  imageContainer: {
    width: '30%',
  },
  image: {
    resizeMode: 'contain',
    height: 140,
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 15,
  },
  image_not_available: {
    resizeMode: 'contain',
    height: 140,
    marginTop: 15,
  },
  textTitle: {
    color: Colors.text,
    fontWeight: Fonts.weight.bold,
    fontSize: Fonts.size.h3,
  },
  textSubTitle: {
    color: Colors.text,
    fontSize: Fonts.size.regular,
  },
});
