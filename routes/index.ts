import errorHandler from "../middleware/error-handler";
import settingsRoutes from "./settings";
import buildsRoutes from "./builds";
import { Application } from "express";

const routRegister = (app: Application) => {
  app.use("/api/settings", settingsRoutes);
  app.use("/api/builds", buildsRoutes);
  app.use(errorHandler);
};

export default routRegister;
