const express = require("express");
const morgan = require("morgan");
const config = require("config");

const port = config.get("port");
require("express-async-errors");

const app = express();

app.use(express.static("static"));
app.use(morgan("dev"));
app.use(express.json());

require("./routes")(app);

app.listen(port, () => {
  console.log(`CI server listening on port ${port}!`);

  // Проверяем есть ли в очереди билды со статусом Waiting и InPrograss
  require("./utils/initial-check")();
});
