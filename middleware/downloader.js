const { spawn } = require("child_process");
const rimraf = require("rimraf");
const path = require("path");
const { promisify } = require("util");
const axios = require("axios");

const githubApi = require("../api/github-api");
const shriApi = require("../api/shri-api");

module.exports = async (req, res, next) => {
  const { repoName, mainBranch } = req.body;

  // Скачиваем предыдущие настройки
  const prevConfigResponse = await shriApi.getConfig();

  // Если не изменились  наименование репозитория и ветки пропускаем скачивание
  if (
    prevConfigResponse.data &&
    prevConfigResponse.data.repoName === repoName &&
    prevConfigResponse.data.mainBranch === mainBranch
  ) {
    return next();
  }

  const repository = await githubApi.getRepo(repoName);

  //Проверяем существование ветки на github
  await githubApi.getBranch(repoName, mainBranch);

  // чистим директорию storage
  await promisify(rimraf)(path.join(".", "storage"));

  // клонируем репозиторий в storage
  const child = spawn("git", ["clone", "--branch", mainBranch, repository.clone_url, "storage"]);
  console.info("Start cloning...");

  child.on("exit", (code) => {
    console.info("Finish cloning...");
    if (code === 0) next();
  });

  child.on("error", (err) => {
    console.log("Cloning error...");
    next(err);
  });
};
