const { Task } = require("../models");

module.exports = {
  async createTask(req, res) {
    try {
      if (req.body.content.trim().length == 0) {
        return res.status(400).send({
          error: "You must provide valid task",
        });
      }

      const isTaskExist = await Task.findOne({
        where: {
          content: req.body.content,
          owner: req.body.owner,
        },
      });

      if (isTaskExist) {
        return res.status(500).send({
          error: "This task is exist!",
        });
      }

      const task = await Task.create(req.body);
      const taskJson = task.toJSON();
      res.send({
        task: taskJson,
      });
    } catch (err) {
      console.log("error: ", err);
      res.status(403).send({
        error: "Something error!",
      });
    }
  },
  async getTasks(req, res) {
    try {
      let tasks = null;
      const ownerId = req.params.ownerId;
      tasks = await Task.findAll({
        where: {
          owner: ownerId,
        },
      });

      res.send(tasks);
    } catch (err) {
      res.status(500).send({
        error: "Something error!",
      });
    }
  },
  async deleteTask(req, res) {
    try {
      const taskId = req.params.taskId;
      const task = await Task.findByPk(taskId);
      await task.destroy();
      res.send(task);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to delete the task",
      });
    }
  },
  async updateStatusTask(req, res) {
    try {
      await Task.update(req.body, {
        where: {
          id: req.params.taskId,
        },
      });

      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to update the task",
      });
    }
  },
};
