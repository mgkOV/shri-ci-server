const express = require("express");

const buildRunner = require("../utils/build-runner");
const shriApi = require("../api/shri-api");
const githubApi = require("../api/github-api");

const router = express.Router();

// получение списка сборок
router.get("/", async (req, res) => {
  const { offset = 0, limit = 25 } = req.query;
  const response = await shriApi.getBuildList(offset, limit);

  res.json(response.data);
});

// получение информации о конкретной сборке
router.get("/:buildId", async (req, res) => {
  const { buildId } = req.params;
  const response = await shriApi.getBuildDetails(buildId);

  res.json(response.data);
});

// получение логов билда (сплошной текст)
router.get("/:buildId/logs", async (req, res) => {
  const { buildId } = req.params;
  const response = await shriApi.getBuildLog(buildId);

  res.send(response);
});

// добавление сборки в очередь
router.post("/:commitHash", async (req, res) => {
  const { commitHash } = req.params;

  const config = await shriApi.getConfig();

  const { repoName, buildCommand, mainBranch, period } = config.data;

  const commitRes = await githubApi.getCommit(repoName, commitHash);

  const { sha, commit } = commitRes;

  const commitData = {
    commitMessage: commit.message,
    commitHash: sha,
    branchName: mainBranch,
    authorName: commit.author.name
  };

  const status = await shriApi.postBuildRequest(commitData);

  const builds = await shriApi.getBuildList();
  const buildToAdd = builds.data.find(b => b.commitHash === sha);

  buildRunner.addBuilds(buildToAdd);

  res.sendStatus(status);
});

module.exports = router;
