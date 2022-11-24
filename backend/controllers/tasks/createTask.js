// Service
const tasksService = require('../../services/tasks.service');

const createTask = async (req, res) => {

    try {

        const response = await tasksService.createTask(req.body);

        return res.send(response);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = { createTask };