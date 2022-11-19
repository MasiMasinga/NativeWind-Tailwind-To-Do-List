import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

// React Native Vector Icons
import Icon from 'react-native-vector-icons/MaterialIcons';

// Styles
import styles from '../style';

const TaskContainer = ({
  title,
  editTask,
  deleteTask,
  completeTask,
  undoTask,
}) => {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskContainerHeaderText}>
        <Text>{title}</Text>
      </View>

      <View style={styles.actionIconContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={editTask}>
          <Icon name="edit" type="ionicon" color="#000" size={26} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={completeTask}>
          <Icon name="check" type="ionicon" color="#000" size={26} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={undoTask}>
          <Icon name="cancel" type="ionicon" color="#000" size={26} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={deleteTask}>
          <Icon name="delete-forever" type="ionicon" color="#000" size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskContainer;
