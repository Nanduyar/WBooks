import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Colors, Fonts} from '../../Themes';

export default function ContainedButton(props) {
  return (
    <TouchableOpacity
      style={styles.containedButtonContainer}
      onPress={props.onPress}>
      <Text style={styles.containedButtonText}>{props.label}</Text>
    </TouchableOpacity>
  );
}

export function OutlinedButton(props) {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={styles.outlinedButtonContainer}
      onPress={props.onPress}>
      <Text
        style={
          !props.disabled
            ? styles.outlinedButtonText
            : styles.outlinedButtonTextDisabled
        }>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containedButtonContainer: {
    width: '80%',
    marginVertical: 10,
    backgroundColor: Colors.primary,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 12,
  },
  containedButtonText: {
    color: Colors.white,
    fontWeight: Fonts.weight.bold,
    fontSize: Fonts.size.regular,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  outlinedButtonContainer: {
    width: '80%',
    marginVertical: 10,
    backgroundColor: Colors.white,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  outlinedButtonText: {
    color: Colors.primary,
    fontWeight: Fonts.weight.bold,
    fontSize: Fonts.size.regular,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  outlinedButtonTextDisabled: {
    color: 'grey',
    fontWeight: Fonts.weight.bold,
    fontSize: Fonts.size.regular,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
