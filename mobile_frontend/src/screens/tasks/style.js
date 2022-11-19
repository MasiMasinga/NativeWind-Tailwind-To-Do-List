import {StyleSheet} from 'react-native';

// Utils
import {Colors} from '../../common/utils/constants';

const styles = StyleSheet.create({
  container: {flex: 1},
  textNameHeader: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
  },
  addTaskButtonContainer: {
    borderRadius: 4,
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 20,
  },
  addTaskButtonText: {textAlign: 'center', fontWeight: 'bold', color: 'white'},
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    margin: 15,
    padding: 6,
  },
  taskContainerHeaderText: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  actionIconContainer: {display: 'flex', flexDirection: 'row'},
  iconButton: {margin: 6},
});

export default styles;
