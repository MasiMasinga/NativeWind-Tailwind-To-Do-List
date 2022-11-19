import {Text, StyleSheet} from 'react-native';
import React from 'react';

// Utils
import {Colors} from '../utils/constants';

const AppHeader = ({name}) => {
  return <Text style={styles.textNameHeader}>Welcome {name}</Text>;
};

const styles = StyleSheet.create({
  textNameHeader: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
  },
});

export default AppHeader;
