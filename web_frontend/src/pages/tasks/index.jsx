import React, { useState } from "react"

// Components
import Button from "../../common/components/Button";
import Modal from "../../common/components/Modal";
import TaskContainer from "../../common/components/TaskContainer";

const Tasks = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [task, setTask] = useState("Task Name");
  const [editTask, setEditTask] = useState(false);
  const [undoTask, setUndoTask] = useState(false);
  const [completeTask, setCompleteTask] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);

  return (
    <div className="bg-white h-screen w-screen">

      <div className="flex justify-end w-screen h-15">
        <button className="p-3 bg-white rounded-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black">
            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <h5 className='text-black font-bold text-2xl m-5 text-center p-5'>
        Welcome Masi!
      </h5>

      <div className='text-center'>
        <Button title="Add Task" onClick={() => setShowModal(true)} />
      </div>

      <TaskContainer
        taskTitle={task}
        editTask={() => setShowEditModal(true)}
        completeTask={completeTask}
        undoTask={undoTask}
        deleteTask={() => setShowDeleteModal(true)}
      />

      {
        showModal && (
          <Modal
            taskTitle="Add Task"
            taskDescription="I always felt like I could do anything. That’s the main thing people are controlled by!"
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
            taskDescription="I always felt like I could do anything. That’s the main thing people are controlled by!"
            onCancel={() => setShowDeleteModal(false)}
            onhandleClose={() => setShowDeleteModal(false)}
            onSubmit={() => setShowDeleteModal(false)}
            buttonTitle="Delete"
          />
        )
      }

      {
        showEditModal && (
          <Modal
            taskTitle="Edit Task"
            taskDescription="I always felt like I could do anything. That’s the main thing people are controlled by!"
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