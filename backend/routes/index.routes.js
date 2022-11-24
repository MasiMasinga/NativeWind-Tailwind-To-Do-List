const { Router } = require("express");

// Auth Controllers
const registerController = require("../controllers/auth/register");
const loginController = require("../controllers/auth/login");
const logoutController = require("../controllers/auth/logout");
const resetPasswordController = require("../controllers/auth/resetPassword");
const updateEmailController = require("../controllers/auth/updateEmail");
const updateNameController = require("../controllers/auth/updateName");
const updatePasswordController = require("../controllers/auth/updatePassword");

// Task Controllers
const createTaskController = require("../controllers/tasks/createTask");
const updateTaskController = require("../controllers/tasks/updateTask");
const deleteTaskController = require("../controllers/tasks/deleteTask");
const getTasksController = require("../controllers/tasks/getTasks");
const getTaskController = require("../controllers/tasks/getTask");

const route = Router();

// Auth API Routes
route.post('/auth/register', registerController.register);
route.post('/auth/login', loginController.login);
route.post('/auth/reset-password/:id', resetPasswordController.resetPassword);
route.get('/auth/logout', logoutController.logout);
route.put('/auth/update-email/:id', updateEmailController.updateEmail);
route.put('/auth/update-name/:id', updateNameController.updateName);
route.put('auth/update-reset-password/:id', updatePasswordController.updatePassword);

// Task API Routes
route.post('/task/create-task', createTaskController.createTask);
route.put('/task/update-task/:id', updateTaskController.updateTask);
route.delete('task/delete-task/:id', deleteTaskController.deleteTask);
route.get('task/get-tasks', getTasksController.getTasks);
route.get('task/get-task/:id', getTaskController.getTask);

module.exports =  route;