const express = require("express");
const axios = require("axios");
const config = require("config");
const https = require("https");

const downloader = require("../middleware/downloader");

const router = express.Router();

const JWT = config.get("jwt");
const URL = "https://hw.shri.yandex/api";

const agent = new https.Agent({
  rejectUnauthorized: false
});

router.get("/", async (req, res) => {
  const response = await axios.get(`${URL}/conf`, {
    headers: { Authorization: `Bearer ${JWT}` },
    httpsAgent: agent
  });

  if (!response.data.data) return res.json({});

  const { repoName, buildCommand, mainBranch, period } = response.data.data;

  const settings = {
    repoName,
    buildCommand,
    mainBranch,
    period
  };

  res.json(settings);
});

router.post("/", downloader, async (req, res) => {
  const { repoName, buildCommand, mainBranch, period } = req.body;

  const settings = {
    repoName,
    buildCommand,
    mainBranch,
    period
  };

  const response = await axios.post(`${URL}/conf`, settings, {
    headers: { Authorization: `Bearer ${JWT}` },
    httpsAgent: agent
  });

  const getCommitsResponse = await axios.get(
    `https://api.github.com/repos${repoName}/commits?sha=${mainBranch}`,
    {
      headers: { Accept: "application/vnd.github.v3+json" }
    }
  );

  const { sha, commit } = getCommitsResponse.data[0];

  const commitData = {
    commitMessage: commit.message,
    commitHash: sha,
    branchName: mainBranch,
    authorName: commit.author.name
  };

  await axios.post(`${URL}/build/request`, commitData, {
    headers: { Authorization: `Bearer ${JWT}` },
    httpsAgent: agent
  });

  res.sendStatus(response.status);
});

module.exports = router;
