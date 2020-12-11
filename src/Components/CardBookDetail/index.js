import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import ContainedButton, {OutlinedButton} from '../ButtonForm';
import {Colors, Fonts} from '../../Themes';

export default function CardBookDetail(props) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardSection}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={
              props.focusBook.image_url
                ? {
                    uri: props.focusBook.image_url,
                  }
                : require('../../Assets/General/no_disponible.png')
            }
          />
        </View>
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.textTitle}>{props.focusBook.title}</Text>
          </View>
          <View>
            <Text style={styles.availability}>Available</Text>
          </View>
          <View>
            <Text style={styles.textOther}>{props.focusBook.author}</Text>
          </View>
          <View>
            <Text style={styles.textOther}>{props.focusBook.year}</Text>
          </View>
          <View>
            <Text style={styles.textOther}>{props.focusBook.genre}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <OutlinedButton label={'ADD TO WISHLIST'} />
        <ContainedButton label={'RENT'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: '2%',
    backgroundColor: 'white',
    width: '96%',
    height: 400,
    borderRadius: 12,
    elevation: 2,
  },
  cardSection: {
    flexDirection: 'row',
  },
  infoContainer: {
    padding: 15,
    marginLeft: 15,
  },
  imageContainer: {
    width: '40%',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: 200,
    marginTop: 15,
    marginLeft: 30,
  },
  image_not_available: {
    resizeMode: 'contain',
    height: 140,
    marginTop: 15,
  },
  availability: {
    color: Colors.available,
    fontWeight: Fonts.weight.bold,
  },
  textTitle: {
    color: Colors.text,
    fontWeight: Fonts.weight.bold,
    fontSize: Fonts.size.h2,
    marginEnd: 150,
  },
  textOther: {
    color: Colors.text,
    fontSize: Fonts.size.regular,
  },
});
