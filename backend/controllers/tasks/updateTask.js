// Service
const tasksService = require('../../services/tasks.service');

const updateTask = async (req, res) => {

    try {

        const response = await tasksService.updateTask(req.body);

        return res.send(response);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = { updateTask };