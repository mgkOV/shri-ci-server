const express = require("express");
const axios = require("axios");
const morgan = require("morgan");
const { port, serverHost, serverPort } = require("./agent-conf");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

require("./routes")(app);

app.listen(port, async () => {
  console.log(`Build agent run on port ${port}`);
  try {
    await axios.post(`http://${serverHost}:${serverPort}/notify-agent`, { port });
  } catch (error) {
    console.log(error.message, error.config);
  }
});
