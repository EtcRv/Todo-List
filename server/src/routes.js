const AuthenticationController = require("./controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy.js");
const TaskController = require("./controllers/TaskController");
const TaskControllerPolicy = require("./policies/TaskControllerPolicy");

module.exports = (app) => {
  app.post(
    "/register",
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );
  app.post("/login", AuthenticationController.login);
  app.post("/createTask", TaskController.createTask);
  app.get("/getTasks/:ownerId", TaskController.getTasks);
  app.delete("/delTask/:taskId", TaskController.deleteTask);
  app.post("/updateTask/:taskId", TaskController.updateStatusTask);
};
