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
  buildRunner.reset();

  res.sendStatus(200);
});

// cохранение настроек
router.post("/", async (req, res) => {
  const { body } = req;

  const settings = {
    repoName: body.repoName,
    buildCommand: body.buildCommand,
    mainBranch: body.mainBranch,
    period: body.period
  };

  // Скачиваем предыдущие настройки
  const prevConfigResponse = await shriApi.getConfig();

  // Проверяем поменялось ли имя репозитоория
  if (prevConfigResponse.data && prevConfigResponse.data.repoName !== body.repoName) {
    // удаляем старую конфигурацию (чтобы получить новый id и почистить очередь билдов) и сохраняем новую
    await shriApi.deleteConfig();
  }

  //Сохраняем новую конфигурацию
  await shriApi.postConfig(settings);

  // Скачиваем новую конфигурацию
  const newConfigResponse = await shriApi.getConfig();

  let { data } = newConfigResponse;

  const newSettings = {
    id: data.id,
    repoName: data.repoName,
    buildCommand: data.buildCommand,
    mainBranch: data.mainBranch,
    period: data.period
  };

  res.json(newSettings);
});

module.exports = router;
