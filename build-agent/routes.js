const { exec } = require("child_process");
const path = require("path");
const axios = require("axios");

const clone = require("./middleware/clone");
const checkout = require("./middleware/checkout");

module.exports = (app) => {
  app.post("/build", clone, checkout, async (req, res) => {
    build = {
      id: "b1d16840-3d22-48ee-af2b-4dd512504875",
      commitHash: "c120f44d3d29c8e822a92e1d6879b8b77be6b9dc",
      repoName: "axios/axios",
      buildCommand: "npm i && npm run build"
    };

    exec(build.buildCommand, { cwd: path.join(".", "storage") }, (err, stdout, stderr) => {
      if (err) {
        console.log("Error build...");
        console.log(stderr);
        return;
      }

      console.log("Finish build...");
      console.log(stdout);
    });
  });
};
