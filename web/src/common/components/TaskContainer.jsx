import React from 'react'

// React Hero Icons
import { HiCheck } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";
import { HiPencilSquare } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi2";

const TaskContainer = ({
    taskTitle,
    editTask,
    completeTask,
    undoTask,
    deleteTask,
    state,
}) => {
    return (
        <div className="flex justify-center text-center">
            <div className="w-6/12 m-10 flex justify-evenly border-2 border-black rounded-md">
                <div className="self-center">
                    <h5 className={state === true ? "line-through text-black" : "text-black font-medium"}>
                        {taskTitle}
                    </h5>
                </div>
                <div className="flex">
                    <button className="bg-white m-2 border-yellow-500" onClick={editTask}>
                        <HiPencilSquare className='text-black' />
                    </button>
                    <button className="bg-white m-2 border-green-500" onClick={completeTask}>
                        <HiCheck className='text-black' />
                    </button>
                    <button className="bg-white m-2 border-red-500" onClick={undoTask}>
                        <HiXMark className='text-black' />
                    </button>
                    <button className="bg-white m-2" onClick={deleteTask}>
                        <HiTrash className='text-black' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TaskContainer