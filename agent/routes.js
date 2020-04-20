const { promisify } = require("util");
const exec = promisify(require("child_process").exec);
const path = require("path");
const axios = require("axios");

const clone = require("./middleware/clone");
const checkout = require("./middleware/checkout");
const { port, serverHost, serverPort } = require("./agent-conf");

module.exports = (app) => {
  app.post("/build", clone, checkout, async (req, res) => {
    let { build } = req.body;
    const startTime = new Date();
    let result = {};

    try {
      const { stdout, stderr } = await exec(build.buildCommand, { cwd: path.join(".", "storage") });
      console.log("Finish build...");

      const duration = new Date().getTime() - startTime.getTime();
      result = { id: build.id, status: "Success", log: stdout, port, duration };
    } catch (error) {
      console.log(error.message);
    }

    try {
      await axios.post(`http://${serverHost}:${serverPort}/notify-build-result`, result);
    } catch (error) {
      console.log(error.message);
    }
  });
};
