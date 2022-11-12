import React, { createContext, useContext, useState, useEffect } from 'react'

// API

// Context
export const TaskContext = createContext();

// TODO 1: Create a new context called TaskContext
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    const createTask = (task) => {
        setLoading(true);
        fetch('http://localhost:3001/api/tasks/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        })
            .then((res) => res.json())
            .then((data) => {
                setTasks([...tasks, data]);
                setLoading(false);
            });
    };

    const updateTask = (task) => {
        setLoading(true);
        fetch(`http://localhost:3001/api/tasks/${task.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        })
            .then((res) => res.json())
            .then((data) => {
                setTasks(
                    tasks.map((task) =>
                        task.id === data.id ? { ...task, ...data } : task
                    )
                );
                setLoading(false);
            });
    }

    const deleteTask = (task) => {
        setLoading(true);
        fetch(`http://localhost:3001/api/tasks/${task.id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                setTasks(tasks.filter((task) => task.id !== data.id));
                setLoading(false);
            });
    };

    const getTasks = () => {
        setLoading(true);
        fetch('http://localhost:3001/tasks')
            .then(res => res.json())
            .then(data => {
                setTasks(data);
                setLoading(false);
            });
    };

    const getTask = (id) => {
        setLoading(true);
        fetch(`http://localhost:8000/tasks/${id}`)
            .then(res => res.json())
            .then(data => {
                setTasks(data);
                setLoading(false);
            });
        setLoading(false);
    };

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