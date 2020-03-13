const errorHandler = require("../middleware/error-handler");

module.exports = app => {
  app.get("/", (req, res) => res.send("hello from CI server!"));
  app.use(errorHandler);
};
