import express from "express";
import morgan from "morgan";
import path from "path";

import "express-async-errors";

import routeRegister from "./routes";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

//регистрируем routes

app.use(express.static(path.join("client", "build")));

routeRegister(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

export default app;
