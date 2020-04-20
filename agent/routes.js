const { promisify } = require("util");
const exec = promisify(require("child_process").exec);
const path = require("path");
const axios = require("axios");
const axiosRetry = require("axios-retry");

axiosRetry(axios, { retries: 4, retryDelay: axiosRetry.exponentialDelay });

const clone = require("./middleware/clone");
const checkout = require("./middleware/checkout");
const { port, serverHost, serverPort } = require("./agent-conf");

module.exports = (app) => {
  app.post("/build", clone, checkout, async (req, res) => {
    let { build } = req.body;
    const startTime = new Date();

    try {
      const { stdout, stderr } = await exec(build.buildCommand, { cwd: path.join(".", "storage") });
      console.log("Finish build...");

      const duration = new Date().getTime() - startTime.getTime();
      const result = {
        id: build.id,
        status: stdout ? "Success" : "Failed",
        log: stdout ? stdout : stderr,
        port,
        duration
      };

      await axios.post(`http://${serverHost}:${serverPort}/notify-build-result`, result);
    } catch (error) {
      console.log(error.message);
    }
  });
};
