const express = require("express");

const shriApi = require("../api/shri-api");
const githubApi = require("../api/github-api");
const downloader = require("../middleware/downloader");
const buildRunner = require("../utils/build-runner");

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

// cохранение настроек
router.post("/", downloader, async (req, res) => {
  const { repoName, buildCommand, mainBranch, period } = req.body;

  const settings = {
    repoName,
    buildCommand,
    mainBranch,
    period
  };

  buildRunner.reset();

  await shriApi.deleteConfig();

  const status = await shriApi.postConfig(settings);

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

  buildRunner.addBuilds(build.data);

  res.sendStatus(status);
});

module.exports = router;
