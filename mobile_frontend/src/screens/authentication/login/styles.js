import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textHeader: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    marginTop: 25,
    fontWeight: 'bold',
  },
  formContainer: {
    margin: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    margin: 10,
  },
  forgotPasswordText: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    margin: 10,
  },
  buttonContainer: {
    textAlign: 'center',
  },
  buttonButtonTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomButtonText: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
