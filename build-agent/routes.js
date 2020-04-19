const { exec } = require("child_process");
const path = require("path");
const axios = require("axios");

const clone = require("./middleware/clone");
const checkout = require("./middleware/checkout");

module.exports = (app) => {
  app.post("/build", clone, checkout, async (req, res) => {
    let { build } = req.body;

    build = {
      commitHash: "d5a66494928e2f24d4",
      repoName: "mgkOV/shri-ci-test",
      buildCommand: "npm i && npm run build"
    };

    exec(build.buildCommand, { cwd: path.join(".", "storage") }, (err, stdout, stderr) => {
      if (err) {
        console.log("Error build...");
        console.log(stderr.toString());
        return;
      }

      console.log("Finish build...");
      console.log(stdout.toString());
    });
  });
};
