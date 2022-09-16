const jwt = require("jsonwebtoken");
const config = require("../config/config");
// const config = require("config");

module.exports = {
  async auth(req, res, next) {
    const token = req.header("x-auth-token");
    if (!token) return res.status(401).send("Access denied. No token provided");

    try {
      jwt.verify(token, config.authentication.jwtSecret);
      next();
    } catch (err) {
      console.log("error: ", err);
      res.status(400).send("Invalid token.");
    }
  },
};
