const express = require("express");
const config = require("config");

const app = express();

const port = config.get("build-server.port");

require("./routes")(app);

app.listen(port, () => {
  console.log(`Build server run on port ${port}`);
});
