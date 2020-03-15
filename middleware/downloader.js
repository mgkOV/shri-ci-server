const { spawn } = require("child_process");
const rimraf = require("rimraf");
const path = require("path");
const { promisify } = require("util");
const axios = require("axios");

module.exports = async (req, res, next) => {
  const { repoName } = req.body;
  const URL = `https://api.github.com/repos${repoName}`;

  const response = await axios.get(URL);
  const repository = response.data;

  req.repository;

  await promisify(rimraf)(path.join(".", "storage"));

  const child = spawn("git", ["clone", repository.clone_url, "storage"]);

  child.on("exit", code => {
    if (code === 0) next();
  });

  child.on("error", err => {
    throw err;
  });
};
