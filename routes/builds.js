const express = require("express");
const axios = require("axios");
const config = require("config");
const https = require("https");

const router = express.Router();

const JWT = config.get("jwt");
const URL = "https://hw.shri.yandex/api";

const agent = new https.Agent({
  rejectUnauthorized: false
});

// получение списка сборок
router.get("/", async (req, res) => {
  const { offset = 0, limit = 25 } = req.query;
  const response = await axios.get(`${URL}/build/list?offset=${offset}&limit=${limit}`, {
    headers: { Authorization: `Bearer ${JWT}` },
    httpsAgent: agent
  });

  res.json(response.data.data);
});

// получение информации о конкретной сборке
router.get("/:buildId", async (req, res) => {
  const { buildId } = req.params;

  const response = await axios.get(`${URL}/build/details?buildId=${buildId}`, {
    headers: { Authorization: `Bearer ${JWT}` },
    httpsAgent: agent
  });

  res.json(response.data.data);
});

// получение логов билда (сплошной текст)
router.get("/:buildId/logs", async (req, res) => {
  const { buildId } = req.params;

  const response = await axios.get(`${URL}/build/log?buildId=${buildId}`, {
    headers: { Authorization: `Bearer ${JWT}` },
    httpsAgent: agent
  });

  res.json(response.data);
});

// добавление сборки в очередь
router.post("/:commitHash", async (req, res) => {
  const { commitHash } = req.params;

  const response = await axios.get(`${URL}/conf`, {
    headers: { Authorization: `Bearer ${JWT}` },
    httpsAgent: agent
  });

  const { repoName, buildCommand, mainBranch, period } = response.data.data;

  const getCommitsResponse = await axios.get(
    `https://api.github.com/repos${repoName}/commits/${commitHash}`
  );

  const { sha, commit } = getCommitsResponse.data;

  const commitData = {
    commitMessage: commit.message,
    commitHash: sha,
    branchName: mainBranch,
    authorName: commit.author.name
  };

  const status = await axios.post(`${URL}/build/request`, commitData, {
    headers: { Authorization: `Bearer ${JWT}` },
    httpsAgent: agent
  });

  res.sendStatus(status.status);
});

module.exports = router;
