const { exec } = require("child_process");
const path = require("path");
const axios = require("axios");

module.exports = (req, res, next) => {
  let { build } = req.body;
  build = {
    id: "b1d16840-3d22-48ee-af2b-4dd512504875",
    commitHash: "c120f44d3d29c8e822a92e1d6879b8b77be6b9dc",
    repoName: "axios/axios",
    buildCommand: "cd storage && npm i && npm run test"
  };

  // Делаем checkout нужного комита
  exec(`git -C storage checkout ${build.commitHash}`, (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Finish checkout...");

    next();
  });
};
