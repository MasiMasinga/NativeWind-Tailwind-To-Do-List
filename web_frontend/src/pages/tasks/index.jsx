import React, { useState } from "react"

// Components
import Button from "../../common/components/Button";
import Modal from "../../common/components/Modal";
import TaskContainer from "../../common/components/TaskContainer";
import AppHeader from '../../common/components/AppHeader'

const Tasks = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [task, setTask] = useState("Task Name");
  const [editTask, setEditTask] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);
  const [taskState, setTaskState] = useState(false);

  const handleCompleteTask = () => {
    setTaskState(true);
    setShowModal(false);
  };

  const handleUndoTask = () => {
    setTaskState(false);
    setShowModal(false);
  };

  return (
    <div className="bg-white h-screen w-screen">

      <AppHeader />

      <h5 className='text-black font-bold text-2xl m-5 text-center p-5'>
        Welcome Masi!
      </h5>

      <div className='text-center'>
        <Button title="Add Task" onClick={() => setShowModal(true)} />
      </div>

      <TaskContainer
        taskTitle={task}
        editTask={() => setShowEditModal(true)}
        completeTask={handleCompleteTask}
        undoTask={handleUndoTask}
        deleteTask={() => setShowDeleteModal(true)}
        state={taskState}
      />

      {
        showModal && (
          <Modal
            taskTitle="Add Task"
            taskDescription="You are about to add a new task. Please enter the task name below."
            onCancel={() => setShowModal(false)}
            onhandleClose={() => setShowModal(false)}
            onSubmit={() => setShowModal(false)}
            buttonTitle="Save"
          />
        )
      }

      {
        showDeleteModal && (
          <Modal
            taskTitle="Delete Task"
            taskDescription="You are about to delete this task. Are you sure you want to continue?"
            onCancel={() => setShowDeleteModal(false)}
            onhandleClose={() => setShowDeleteModal(false)}
            onSubmit={() => setShowDeleteModal(false)}
            buttonTitle="Delete"
            deleteTask={true}
          />
        )
      }

      {
        showEditModal && (
          <Modal
            taskTitle="Edit Task"
            taskDescription="You are about to edit this task name. Are you sure you want to continue?"
            onCancel={() => setShowEditModal(false)}
            onhandleClose={() => setShowEditModal(false)}
            onSubmit={() => setShowEditModal(false)}
            buttonTitle="Save"
          />
        )
      }

    </div >
  )
}

export default Tasks