const express = require("express");
const { port } = require("./server-conf");
const morgan = require("morgan");

require("express-async-errors");

const app = express();

app.use(express.json({ limit: "2mb" }));

app.use(morgan("dev"));

require("./routes")(app);

app.listen(port, () => {
  console.log(`Build server run on port ${port}`);
});
