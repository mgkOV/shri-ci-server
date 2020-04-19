const { exec } = require("child_process");
const path = require("path");
const axios = require("axios");

const clone = require("./middleware/clone");
const checkout = require("./middleware/checkout");
const { port, serverHost, serverPort } = require("./agent-conf");

module.exports = (app) => {
  app.post("/build", clone, checkout, (req, res) => {
    let { build } = req.body;
    const startTime = new Date();

    exec(build.buildCommand, { cwd: path.join(".", "storage") }, async (err, stdout, stderr) => {
      if (err) {
        console.log("Error build...");
        return;
      }

      console.log("Finish build...");

      const duration = new Date().getTime() - startTime.getTime();
      const result = { id: build.id, status: "Success", log: stdout.toString(), port, duration };

      try {
        await axios.post(`http://${serverHost}:${serverPort}/notify-build-result`, result);
      } catch (error) {
        console.log(error.message);
      }
    });
  });
};
