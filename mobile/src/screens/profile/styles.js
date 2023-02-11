import { StyleSheet } from 'react-native';

// Utils
import { Colors } from '../../common/utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileButtonContainer: { 
    alignSelf: 'center', 
    margin: 25, 
    borderColor: 'black', 
    borderWidth: 1, 
    borderRadius: 4, 
    padding: 25, 
    width: 250 
  },
  profileButtonText: { color: Colors.primary, fontWeight: 'bold', textAlign: 'center', fontSize: 15 },
});

export default styles;
