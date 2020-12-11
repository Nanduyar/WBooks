import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Colors} from '../../Themes';

export function InputForm(props) {
  return (
    <TextInput
      placeholderTextColor={props.placeholderTextColor}
      editable={props.editable}
      style={props.style}
      placeholder={props.placeholder}
      type={props.type}
      label={props.label}
      secureTextEntry={props.secureTextEntry}
      keyboardType={props.keyboardType}
      value={props.value}
      onChangeText={props.onChangeText}
      autoCapitalize={props.autoCapitalize}
    />
  );
}

export function PickerForm(props) {
  return (
    <Picker
      selectedValue={props.selectedValue}
      onValueChange={props.onValueChange}
      style={styles.picker}>
      <Picker.Item label="--" value="--" color={'grey'} />
      <Picker.Item label="18" value="18" color={'grey'} />
      <Picker.Item label="19" value="19" color={'grey'} />
      <Picker.Item label="20" value="20" color={'grey'} />
      <Picker.Item label="21" value="21" color={'grey'} />
      <Picker.Item label="22" value="22" color={'grey'} />
      <Picker.Item label="23" value="23" color={'grey'} />
      <Picker.Item label="24" value="24" color={'grey'} />
      <Picker.Item label="25" value="25" color={'grey'} />
      <Picker.Item label="26" value="26" color={'grey'} />
      <Picker.Item label="27" value="27" color={'grey'} />
      <Picker.Item label="28" value="28" color={'grey'} />
      <Picker.Item label="29" value="29" color={'grey'} />
      <Picker.Item label="30" value="30" color={'grey'} />
      <Picker.Item label="+30" value="+30" color={'grey'} />
      <Picker.Item label="+40" value="+40" color={'grey'} />
      <Picker.Item label="+50" value="+50" color={'grey'} />
      <Picker.Item label="+60" value="+60" color={'grey'} />
    </Picker>
  );
}

export default function SearchInput(props) {
  return (
    <TextInput
      style={props.style}
      placeholder={props.placeholder}
      type={props.type}
      label={props.label}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    width: '100%',
    height: 52,
    marginVertical: 10,
  },
  picker: {
    color: Colors.text,
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
});
