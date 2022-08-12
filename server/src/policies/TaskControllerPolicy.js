const Joi = require("joi");

module.exports = {
  async createTask(req, res, next) {
    const schema = Joi.object({
      content: Joi.string(),
    });

    const { error } = schema.validate(req.body.content);

    if (error) {
      console.log("error: ", error);
      res.status(400).send({
        error: "You must provide valid task",
      });
    } else {
      next();
    }
  },
};
