const express = require("express");

const buildRunner = require("../utils/build-runner");
const formatDuration = require("../utils/format-duration");
const formatDate = require("../utils/format-date");
const shriApi = require("../api/shri-api");
const githubApi = require("../api/github-api");

const router = express.Router();

// получение списка сборок
router.get("/", async (req, res) => {
  const { offset = 0, limit = 25 } = req.query;
  const response = await shriApi.getBuildList(offset, limit);

  const buildList = response.data.map((b) => {
    b.duration = formatDuration(b.duration);
    b.start = formatDate(b.start);
    return b;
  });

  res.json(buildList);
});

// получение информации о конкретной сборке
router.get("/:buildId", async (req, res) => {
  const { buildId } = req.params;
  const response = await shriApi.getBuildDetails(buildId);

  const build = response.data;
  build.duration = formatDuration(build.duration);

  res.json(build);
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
    authorName: commit.author.name,
  };

  const status = await shriApi.postBuildRequest(commitData);

  const builds = await shriApi.getBuildList();
  const buildToAdd = builds.data.find((b) => b.commitHash === sha);

  buildRunner.addBuilds(buildToAdd);

  res.send(buildToAdd);
});

module.exports = router;
