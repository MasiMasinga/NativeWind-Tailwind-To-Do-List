// Service
const tasksService = require('../../services/tasks.service');

const deleteTask = async (req, res) => {

    try {

        const response = await tasksService.deleteTask(req.body);

        return res.send(response);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = { deleteTask };