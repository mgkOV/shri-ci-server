const express = require("express");
const { port } = require("./server-conf");

const app = express();

app.use(express.json());

require("./routes")(app);

app.listen(port, () => {
  console.log(`Build server run on port ${port}`);
});
