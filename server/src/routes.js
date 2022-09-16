const AuthenticationController = require("./controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy.js");
const TaskController = require("./controllers/TaskController");
const TokenRequire = require("./policies/TokenRequire");
const TaskControllerPolicy = require("./policies/TaskControllerPolicy");

module.exports = (app) => {
  app.post(
    "/register",
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );
  app.post("/login", AuthenticationController.login);
  app.post("/createTask", TokenRequire.auth, TaskController.createTask);
  app.get("/getTasks/:ownerId", TokenRequire.auth, TaskController.getTasks);
  app.delete("/delTask/:taskId", TokenRequire.auth, TaskController.deleteTask);
  app.post(
    "/updateTask/:taskId",
    TokenRequire.auth,
    TaskController.updateStatusTask
  );
};
