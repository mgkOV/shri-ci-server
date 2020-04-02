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
  const { repoName, buildCommand, mainBranch, period } = req.body;

  const settings = {
    repoName,
    buildCommand,
    mainBranch,
    period
  };

  // останавливаем утилиты запущенные с прошлыми настройками
  buildRunner.reset();
  watcher.stopWatch();

  // удаляем старую конфигурацию (чтобы получить новый id и почистить очередь билдов) и сохраняем новую
  await shriApi.deleteConfig();
  const status = await shriApi.postConfig(settings);

  // добавляем последний комит в лист билдов
  const getCommitsResponse = await githubApi.getCommits(repoName, mainBranch);

  const { sha, commit } = getCommitsResponse[0];

  const commitData = {
    commitMessage: commit.message,
    commitHash: sha,
    branchName: mainBranch,
    authorName: commit.author.name
  };

  await shriApi.postBuildRequest(commitData);
  const build = await shriApi.getBuildList();

  // запускаем утилиты
  buildRunner.addBuilds(build.data);
  watcher.startWatch();

  res.sendStatus(status);
});

module.exports = router;
