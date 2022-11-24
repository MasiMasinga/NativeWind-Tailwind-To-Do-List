// Service
const tasksService = require('../../services/tasks.service');

const getTasks = async (req, res) => {

    try {

        const response = await tasksService.getTasks(req.body);

        return res.send(response);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = { getTasks };