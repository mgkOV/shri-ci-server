const { spawn } = require("child_process");
const rimraf = require("rimraf");
const path = require("path");
const { promisify } = require("util");
const axios = require("axios");

module.exports = async (req, res, next) => {
  const { repoName, mainBranch } = req.body;
  const URL = `https://api.github.com/repos${repoName}`;

  const response = await axios.get(URL);
  await axios.get(`${URL}/branches/${mainBranch}`);

  const repository = response.data;

  if (!repository || !repository.clone_url) {
    return next(new Error("Неправильное имя репозитория"));
  }

  await promisify(rimraf)(path.join(".", "storage"));

  const child = spawn("git", ["clone", "--branch", mainBranch, repository.clone_url, "storage"]);

  return next();

  // child.on("exit", code => {
  //   if (code === 0) next();
  // });

  child.on("error", err => {
    console.log(err);
  });
};
