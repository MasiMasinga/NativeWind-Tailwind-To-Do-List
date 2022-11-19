import {Text} from 'react-native';
import React from 'react';

// Styles
import styles from '../style';

const TaskHeader = ({name}) => {
  return <Text style={styles.textNameHeader}>Welcome {name}</Text>;
};

export default TaskHeader;
