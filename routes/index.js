const errorHandler = require("../middleware/error-handler");
const settingsRoutes = require("./settings");
const buildsRoutes = require("./builds");

module.exports = app => {
  app.use("/api/settings", settingsRoutes);
  app.use("/api/builds", buildsRoutes);
  app.use(errorHandler);
};
