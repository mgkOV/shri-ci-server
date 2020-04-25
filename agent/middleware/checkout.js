const path = require("path");
const axios = require("axios");
const { promisify } = require("util");
const exec = promisify(require("child_process").exec);

module.exports = async (req, res, next) => {
  try {
    let { build } = req.body;

    // Делаем checkout нужного комита
    await exec(`git -C storage checkout ${build.commitHash}`);
    console.log("Finish checkout...");

    next();
  } catch (error) {
    next(error);
  }
};
