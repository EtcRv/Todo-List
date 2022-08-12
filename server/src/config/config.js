const path = require("path");

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || "todolist",
    user: process.env.DB_USER || "todolist",
    password: process.env.DB_PASS || "todolist",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      host: process.env.HOST || "localhost",
      storage: path.resolve(__dirname, "../../todolist.sqlite"),
    },
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || "secret",
  },
};
