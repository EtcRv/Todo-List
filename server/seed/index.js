const { sequelize, User, Task } = require("../src/models");

const Promise = require("bluebird");
const users = require("./users.json");
const tasks = require("./tasks.json");

sequelize.sync({ force: true }).then(async function () {
  await Promise.all(
    users.map((user) => {
      User.create(user);
    })
  );

  await Promise.all(
    tasks.map((task) => {
      Task.create(task);
    })
  );
});
