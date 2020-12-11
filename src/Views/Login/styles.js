import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: '4%',
  },
  section: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  inputForm: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  inputAge: {
    width: '58%',
    marginRight: '2%',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  inputAgeContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputPicker: {
    width: '40%',
    height: 50,
    backgroundColor: Colors.white,
    borderRadius: 10,
    overflow: 'hidden',
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  textTyc: {
    paddingTop: 6,
    color: Colors.white,
    fontSize: Fonts.size.regular,
  },
});

export default styles;
