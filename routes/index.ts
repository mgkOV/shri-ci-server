import errorHandler from "../middleware/error-handler";
import settingsRoutes from "./settings";
import buildsRoutes from "./builds";
import l10nRoutes from "./l10n";
import { Application } from "express";

const routRegister = (app: Application) => {
  app.use("/api/settings", settingsRoutes);
  app.use("/api/builds", buildsRoutes);
  app.use("/api/l10n", l10nRoutes);
  app.use(errorHandler);
};

export default routRegister;
