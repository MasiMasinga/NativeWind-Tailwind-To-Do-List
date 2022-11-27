const { Router } = require("express");

// Auth Controllers
const AuthController = require('./controllers/AuthController')

// Task Controllers
const TaskController = require('./controllers/TasksController')


const route = Router();

// Auth API Routes
route.post('/auth/register', AuthController.Register);
route.post('/auth/login', AuthController.Login);
route.post('/auth/reset-password/:id', AuthController.ResetPassword);
route.get('/auth/logout', AuthController.Logout);
route.put('/auth/update-email/:id', AuthController.UpdateEmail);
route.put('/auth/update-name/:id', AuthController.UpdateName);
route.put('auth/update-reset-password/:id', AuthController.UpdatePassword);
route.delete('/auth/delete-account/:id', AuthController.DeleteAccount);

// Task API Routes
route.post('/tasks', TaskController.CreateTask);
route.get('/tasks', TaskController.GetAllTasks);
route.get('/tasks/:id', TaskController.GetTask);
route.put('/tasks/:id', TaskController.UpdateTask);
route.delete('/tasks/:id', TaskController.DeleteTask);

module.exports =  route;