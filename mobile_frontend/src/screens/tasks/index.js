import {SafeAreaView} from 'react-native';
import React, {useState} from 'react';

// Styles
import styles from './style';

// Components
import TaskContainer from './components/TaskContainer';
import AddTaskButton from './components/AddTaskButton';
import AppHeader from '../../common/components/AppHeader';
import TaskModal from './components/TaskModal';

const TasksScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [userName, setUserName] = useState('Masi');
  const [task, setTask] = useState('Task Name');
  const [editTask, setEditTask] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);
  const [taskState, setTaskState] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAddTask = () => {
    setLoading(true);
    setLoading(false);
  };

  const handleEditTask = () => {
    setLoading(true);
    setLoading(false);
  };

  const handleDeleteTask = () => {
    setLoading(true);
    setLoading(false);
  };

  const handleCompleteTask = () => {
    setTaskState(true);
  };

  const handleUndoTask = () => {
    setTaskState(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader name={`Welcome ${userName}`} />

      <AddTaskButton onPress={() => setShowModal(true)} />

      <TaskContainer
        title={task}
        editTask={() => setShowEditModal(true)}
        deleteTask={() => setShowDeleteModal(true)}
        completeTask={handleCompleteTask}
        undoTask={handleUndoTask}
        state={taskState}
      />

      <TaskModal
        visible={showModal}
        onRequestClose={() => setShowModal(!showModal)}
        taskTitle="Add Task"
        taskDescription="You are about to add a new task. Please enter the task name below."
        buttonTitle="Save"
        onPress={handleAddTask}
        onHandleClose={() => setShowModal(false)}
      />

      <TaskModal
        visible={showEditModal}
        onRequestClose={() => setShowEditModal(!showEditModal)}
        taskTitle="Edit Task"
        taskDescription="You are about to edit this task name. Are you sure you want to continue?"
        buttonTitle="Edit"
        onPress={handleEditTask}
        onHandleClose={() => setShowEditModal(false)}
      />

      <TaskModal
        visible={showDeleteModal}
        onRequestClose={() => setShowDeleteModal(!showDeleteModal)}
        taskTitle="Delete Task"
        taskDescription="You are about to delete this task. Are you sure you want to continue?"
        buttonTitle="Delete"
        onPress={handleDeleteTask}
        onHandleClose={() => setShowDeleteModal(false)}
      />
    </SafeAreaView>
  );
};

export default TasksScreen;
