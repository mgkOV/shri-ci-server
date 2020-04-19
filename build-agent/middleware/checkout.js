const { exec } = require("child_process");
const path = require("path");
const axios = require("axios");

module.exports = (req, res, next) => {
  let { build } = req.body;
  build = {
    commitHash: "d5a66494928e2f24d4",
    repoName: "mgkOV/shri-ci-test",
    buildCommand: "npm i && npm run build"
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
