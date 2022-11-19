import {
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';

// Styles 
import styles from './style';

// Components
import TaskHeader from './components/TaskHeader';
import TaskContainer from './components/TaskContainer';
import AddTaskButton from './components/AddTaskButton';

const TasksScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [userName, setUserName] = useState('Masi');
  const [task, setTask] = useState("Task Name");
  const [editTask, setEditTask] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);
  const [taskState, setTaskState] = useState(false);

  const handleAddTask = () => { };

  const handleEditTask = () => { };

  const handleDeleteTask = () => { };

  const handleCompleteTask = () => { };

  const handleUndoTask = () => { };

  return (
    <SafeAreaView style={styles.container}>

      <TaskHeader name={userName} />

      <AddTaskButton onPress={handleAddTask} />

      <TaskContainer
        title={task}
        editTask={handleEditTask}
        deleteTask={handleDeleteTask}
        completeTask={handleCompleteTask}
        undoTask={handleUndoTask}
      />

    </SafeAreaView>
  );
};

export default TasksScreen;
