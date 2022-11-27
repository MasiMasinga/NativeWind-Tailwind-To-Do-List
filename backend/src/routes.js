const { Router } = require("express");
const AuthController = require("./controllers/AuthController");
const TaskController = require("./controllers/TasksController");
const auth = require("./middleware/auth");
const route = Router();

route.post("/auth/register", AuthController.Register);
route.post("/auth/login", AuthController.Login);
route.get("/auth/logout", AuthController.Logout);
route.put("/auth/update-email/:id", auth, AuthController.UpdateEmail);
route.put("/auth/update-name/:id", auth, AuthController.UpdateName);
route.put("auth/update-reset-password/:id", auth, AuthController.UpdatePassword);
route.delete("/auth/delete-account/:id", auth, AuthController.DeleteAccount);

route.post("/tasks", auth, TaskController.CreateTask);
route.get("/tasks", auth, TaskController.GetAllTasks);
route.get("/tasks/:id", auth, TaskController.GetTask);
route.put("/tasks/:id", auth, TaskController.UpdateTask);
route.delete("/tasks/:id", auth, TaskController.DeleteTask);

module.exports = route;
