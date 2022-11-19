import {StyleSheet} from 'react-native';

// Utils
import {Colors} from '../../../common/utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textHeader: {
    textAlign: 'center',
    color: Colors.black,
    fontSize: 25,
    marginTop: 25,
    fontWeight: 'bold',
  },
  formContainer: {
    margin: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 6,
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
    color: Colors.black,
  },
});

export default styles;
