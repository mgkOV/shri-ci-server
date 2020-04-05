const express = require("express");
const morgan = require("morgan");
const config = require("config");
const path = require("path");
const serverRenderer = require("./renderer");

// const watcher = require("./utils/watcher");

const port = config.get("port");
require("express-async-errors");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

//регистрируем routes
app.use("^/$", serverRenderer);

app.use(express.static(path.join("client", "build")));

require("./routes")(app);

app.get("*", serverRenderer);

app.listen(port, () => {
  console.log(`CI server listening on port ${port}!`);

  // запускаем автопроверку на новые коммиты репозитория github
  // watcher.startWatch();

  // Проверяем есть ли в очереди билды со статусом Waiting и InPrograss
  require("./utils/initial-check")();
});
