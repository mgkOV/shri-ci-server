const express = require("express");
const axios = require("axios");
const config = require("config");
const https = require("https");

const downloader = require("../middleware/downloader");

const router = express.Router();

const JWT = config.get("jwt");
const URL = "https://hw.shri.yandex/api/conf";

const agent = new https.Agent({
  rejectUnauthorized: false
});

router.get("/", async (req, res) => {
  const response = await axios.get(URL, {
    headers: { Authorization: `Bearer ${JWT}` },
    httpsAgent: agent
  });

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

  const response = await axios.post(URL, settings, {
    headers: { Authorization: `Bearer ${JWT}` },
    httpsAgent: agent
  });

  res.sendStatus(response.status);
});

module.exports = router;
