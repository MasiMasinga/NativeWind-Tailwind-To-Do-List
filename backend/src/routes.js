const { Router } = require("express");
const AuthController = require("./controllers/AuthController");
const TaskController = require("./controllers/TasksController");
const auth = require("./middleware/auth");
const route = Router();

route.post("/register", AuthController.Register);
route.post("/login", AuthController.Login);
route.get("/logout", AuthController.Logout);
route.put("/update-email/:id", auth, AuthController.UpdateEmail);
route.put("/update-name/:id", auth, AuthController.UpdateName);
route.put("/update-password/:id", auth, AuthController.UpdatePassword);
route.delete("/delete-account/:id", auth, AuthController.DeleteAccount);

route.post("/tasks/:id", auth, TaskController.CreateTask);
route.get("/tasks", auth, TaskController.GetAllTasks);
route.get("/tasks/:id", auth, TaskController.GetTask);
route.put("/tasks/:id", auth, TaskController.UpdateTask);
route.delete("/tasks/:id", auth, TaskController.DeleteTask);

module.exports = route;
