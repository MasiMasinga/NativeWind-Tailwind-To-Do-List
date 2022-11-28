const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const helper = require('../utils/Helper');

async function CreateTask (req, res) {

    try {

        let data = {
            title: req.body.title,
        };

        if (!data.title) {
            return res.status(400).json({ message: 'Title field is required' });
        };

        const task = await prisma.tasks.create({
            data: {
                title: data.title,
            },
        });

        return res.status(201).json({message: 'Task created successfully', task: task});
    } catch (err) {
        return helper.handleError(err, req, res);
    }
};

async function GetTask (req, res) {

    try {

        let data = {
            id: req.params.id,
        };

        const task = await prisma.tasks.findUnique({
            where: {
                id: data.id,
            },
        });

        return res.status(200).json({ message: 'Task found', task: task });
    } catch (err) {
        return helper.handleError(err, req, res);
    };
};

async function GetAllTasks (req, res) {

    try {

        const tasks = await prisma.tasks.findMany();

        return res.status(200).json({ message: 'Tasks found', tasks: tasks });
    } catch (err) {
        return helper.handleError(err, req, res);
    };
};

async function UpdateTask (req, res) {
    
    try {

        let data = {
            id: req.params.id,
            title: req.body.title,
        };

        const updatedTask = await prisma.tasks.update({
            where: {
                id: data.id,
            },
            data: {
                title: data.title,
            },
        });

        return res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
    } catch (err) {
        return helper.handleError(err, req, res);
    };
};

async function DeleteTask (req, res) {

    try {

        let data = {
            id: req.params.id,
        };

        const deletedTask = await prisma.tasks.delete({
            where: {
                id: data.id,
            },
        });

        return res.status(200).json({ message: 'Task deleted successfully', task: deletedTask });
    } catch (err) {
        return helper.handleError(err, req, res);
    };
};

module.exports = {
    CreateTask,
    GetTask,
    GetAllTasks,
    UpdateTask,
    DeleteTask,
}