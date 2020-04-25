import express from "express";
import morgan from "morgan";
import path from "path";

import "express-async-errors";

import routeRegister from "./routes";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

let serverRenderer;

if (process.env.NODE_ENV === "test") {
  serverRenderer = (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  };
} else {
  serverRenderer = require("./renderer");
}

//регистрируем routes
app.use("^/$", serverRenderer);

app.use(express.static(path.join("client", "build")));

routeRegister(app);

app.get("*", serverRenderer);

export default app;
