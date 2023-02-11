import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

// Styles
import styles from '../style';

const AddTaskButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.addTaskButtonContainer}>
        <Text style={styles.addTaskButtonText}>Add Task</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddTaskButton;
