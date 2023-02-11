import {StyleSheet} from 'react-native';

// Utils
import {Colors} from '../../common/utils/constants';

const styles = StyleSheet.create({
  container: {flex: 1},
  textNameHeader: {
    color: Colors.black,
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
    borderColor: Colors.black,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalTextHeader: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
  modalTextDescription: {marginTop: 16, marginBottom: 16, textAlign: 'center'},
  modalButtonContainer: {flexDirection: 'row'},
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextInput: {
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 6,
    margin: 10,
    width: 250,
  },
});

export default styles;
