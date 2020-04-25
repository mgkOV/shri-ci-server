import express from "express";
import morgan from "morgan";
import path from "path";
let serverRenderer;

require("express-async-errors");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

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

require("./routes")(app);

app.get("*", serverRenderer);

export default app;
