// Prisma
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const createTask = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            const task = await prisma.task.create({
                data: {
                    title: params.title,
                    description: params.description,
                    completed: params.completed,
                    user_id: params.user_id,
                },
            });

            return resolve(task);
        } catch (err) {
            return reject(err);
        };
    });
};

const deleteTask = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            const task = await prisma.task.delete({
                where: {
                    id: params.id,
                },
            });

            return resolve(task);
        } catch (err) {
            return reject(err);
        };
    });
};

const getTask = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            const task = await prisma.task.findUnique({
                where: {
                    id: params.id,
                },
            });

            return resolve(task);
        } catch (err) {
            return reject(err);
        };
    });
};

const getTasks = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            const tasks = await prisma.task.findMany({
                where: {
                    user_id: params.user_id,
                },
            });

            return resolve(tasks);
        } catch (err) {
            return reject(err);
        };
    });
};

const updateTask = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            const task = await prisma.task.update({
                where: {
                    id: params.id,
                },
                data: {
                    title: params.title,
                    description: params.description,
                    completed: params.completed,
                },
            });

            return resolve(task);
        } catch (err) {
            return reject(err);
        };
    });
};


module.exports = {
    createTask,
    deleteTask,
    getTask,
    getTasks,
    updateTask,
};