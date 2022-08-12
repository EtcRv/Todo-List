console.log("Hello from server");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config/config");
const { sequelize } = require("./models");
const bodyParser = require("body-parser");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

require("./routes")(app);

sequelize.sync({ force: false }).then(() => {
  app.listen(config.port);
  console.log(`Server started on port ${config.port}`);
});
