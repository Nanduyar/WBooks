import React, {useState, useContext} from 'react';
import {View, Text, ImageBackground, Image, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import {InputForm, PickerForm} from '../../Components/InputsForm';
import {OutlinedButton} from '../../Components/ButtonForm';
import {AuthContext} from '../../../src/Utils/Context';
import {Colors} from '../../Themes';

export default function LoginScreen(props) {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [tycAccepted, setTycAccepted] = useState(false);
  const background = require('../../Assets/General/bc_inicio.png');
  const {signIn} = useContext(AuthContext);

  const handleLogin = (first_name, last_name, email, age) => {
    if (tycAccepted) {
      //? Validación de email
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(email) === false) {
        Alert.alert('Ooops...', 'The email is not valid.', [{text: 'OK'}], {
          cancelable: true,
        });
        return false;
      } else {
        signIn(first_name, last_name, email, age);
      }
    } else {
      Alert.alert(
        'Hey, you!',
        'To sign in it is necessary that you first accept the terms and conditions.',
        [{text: 'OK'}],
        {cancelable: true},
      );
    }
  };

  return (
    <ImageBackground source={background} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Image source={require('../../Assets/General/ic_group.png')} />
        </View>
        <View style={styles.form}>
          <InputForm
            placeholderTextColor={Colors.text}
            type={'name'}
            label={'first_name'}
            placeholder={'First name'}
            keyboardType={'default'}
            value={first_name}
            onChangeText={(value) => setFirstName(value)}
            style={styles.inputForm}
          />
          <InputForm
            placeholderTextColor={Colors.text}
            type={'name'}
            label={'last_name'}
            placeholder={'Last name'}
            keyboardType={'default'}
            value={last_name}
            onChangeText={(value) => setLastName(value)}
            style={styles.inputForm}
          />
          <InputForm
            placeholderTextColor={Colors.text}
            autoCapitalize="none"
            type={'email'}
            label={'email'}
            placeholder={'Email'}
            keyboardType={'email-address'}
            value={email}
            onChangeText={(value) => setEmail(value)}
            style={styles.inputForm}
          />
          <View style={styles.inputAgeContainer}>
            <InputForm
              editable={false}
              placeholderTextColor={Colors.text}
              type={'default'}
              label={'age'}
              placeholder={'Age'}
              onChangeText={(value) => setEmail(value)}
              style={styles.inputAge}
            />
            <View style={styles.inputPicker}>
              <PickerForm
                selectedValue={age}
                onValueChange={(value) => setAge(value)}
              />
            </View>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={tycAccepted}
              onValueChange={setTycAccepted}
              tintColors={{true: Colors.white, false: Colors.white}}
            />
            <Text style={styles.textTyc}>
              I have read and accept the terms and conditions.
            </Text>
          </View>
          <OutlinedButton
            disabled={
              first_name === ''
                ? true
                : last_name === ''
                ? true
                : email === ''
                ? true
                : age === ''
                ? true
                : false
            }
            label={'SIGN IN'}
            onPress={() => handleLogin(first_name, last_name, email, age)}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
