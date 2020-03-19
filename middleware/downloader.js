const { spawn } = require("child_process");
const rimraf = require("rimraf");
const path = require("path");
const { promisify } = require("util");
const axios = require("axios");

const githubApi = require("../api/github-api");

module.exports = async (req, res, next) => {
  const { repoName, mainBranch } = req.body;

  const repository = await githubApi.getRepo(repoName);

  //Проверяем существование ветки на github
  await githubApi.getBranch(repoName, mainBranch);

  if (!repository || !repository.clone_url) {
    return next(new Error("Неправильное имя репозитория"));
  }

  next();

  // чистим директорию storage
  await promisify(rimraf)(path.join(".", "storage"));

  // клонируем репозиторий в storage
  const child = spawn("git", ["clone", "--branch", mainBranch, repository.clone_url, "storage"]);

  // child.on("exit", code => {
  //   if (code === 0) next();
  // });

  child.on("error", err => {
    console.log(err);
  });
};
