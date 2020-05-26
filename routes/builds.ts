import express from "express";

import shriApi from "../api/shri-api";
import githubApi from "../api/github-api";
import formatDuration from "../utils/format-duration";
import formatDate from "../utils/format-date";

const router = express.Router();

// получение списка сборок
router.get<{}, {}, {}, { offset: number; limit: number; lang: string }>(
  "/",
  async (req, res) => {
    const { offset = 0, limit = 25, lang } = req.query;
    const response = await shriApi.getBuildList(offset, limit);

    const buildList = response.data.map((b: Build) => {
      b.duration = formatDuration(b.duration, lang);
      b.start = formatDate(b.start, lang);
      return b;
    });

    res.json(buildList);
  }
);

// получение информации о конкретной сборке
router.get<{ buildId: string }, {}, {}, { lang: string }>(
  "/:buildId",
  async (req, res) => {
    const { buildId } = req.params;
    const { lang } = req.query;
    const response = await shriApi.getBuildDetails(buildId);

    const build = response.data;
    build.duration = formatDuration(build.duration, lang);
    build.start = formatDate(build.start, lang);

    res.json(build);
  }
);

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
  const buildToAdd = builds.data.find((b: Build) => b.commitHash === sha);

  buildToAdd.duration = formatDuration(buildToAdd.duration);
  buildToAdd.start = formatDate(buildToAdd.start);

  res.json(buildToAdd);
});

export default router;
