import React, { createContext, useContext, useState, useEffect } from 'react'

// API

// Context
export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    const createTask = (task) => {}

    const updateTask = (task) => {}

    const deleteTask = (task) => {}

    const getTasks = () => {}

    const getTask = (id) => {}

    let value = {
        loading,
        setLoading,
        tasks,
        setTasks,
        createTask,
        updateTask,
        deleteTask,
        getTasks,
        getTask,
    }

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    );
}