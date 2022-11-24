// Service
const tasksService = require('../../services/tasks.service');

const getTask = async (req, res) => {

    try {

        const response = await tasksService.getTask(req.body);

        return res.send(response);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = { getTask };