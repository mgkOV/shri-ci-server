const express = require("express");

const shriApi = require("../api/shri-api");
const githubApi = require("../api/github-api");
const downloader = require("../middleware/downloader");
const buildRunner = require("../utils/build-runner");
const watcher = require("../utils/watcher");

const router = express.Router();

// получение сохраненных настроек
router.get("/", async (req, res) => {
  const config = await shriApi.getConfig();

  if (!config.data) return res.json({});

  const { id, repoName, buildCommand, mainBranch, period } = config.data;

  const settings = {
    id,
    repoName,
    buildCommand,
    mainBranch,
    period
  };

  res.json(settings);
});

// удаление настроек
router.delete("/", async (req, res) => {
  await shriApi.deleteConfig();

  res.sendStatus(200);
});

// cохранение настроек
router.post("/", downloader, async (req, res) => {
  const { body } = req;

  const settings = {
    repoName: body.repoName,
    buildCommand: body.buildCommand,
    mainBranch: body.mainBranch,
    period: body.period
  };

  // останавливаем утилиты запущенные с прошлыми настройками
  buildRunner.reset();

  // watcher.stopWatch();

  // удаляем старую конфигурацию (чтобы получить новый id и почистить очередь билдов) и сохраняем новую
  await shriApi.deleteConfig();

  //Сохраняем новую конфигурацию
  await shriApi.postConfig(settings);
  const configResponse = await shriApi.getConfig();

  let { data } = configResponse;

  const newSettings = {
    id: data.id,
    repoName: data.repoName,
    buildCommand: data.buildCommand,
    mainBranch: data.mainBranch,
    period: data.period
  };

  // добавляем последний комит в лист билдов
  const getCommitsResponse = await githubApi.getCommits(data.repoName, data.mainBranch);

  const { sha, commit } = getCommitsResponse[0];

  const commitData = {
    commitMessage: commit.message,
    commitHash: sha,
    branchName: data.mainBranch,
    authorName: commit.author.name
  };

  await shriApi.postBuildRequest(commitData);
  const build = await shriApi.getBuildList();

  // запускаем утилиты
  buildRunner.addBuilds(build.data);

  // watcher.startWatch();

  res.json(newSettings);
});

module.exports = router;
