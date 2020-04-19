const { exec } = require("child_process");
const path = require("path");
const axios = require("axios");

module.exports = (req, res, next) => {
  let { build } = req.body;

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
