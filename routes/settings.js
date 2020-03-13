const express = require("express");
const axios = require("axios");
const config = require("config");

const router = express.Router();

const jwt = config.get("jwt");

router.get("/", async (req, res) => {
  const settings = {
    repoName: "string",
    buildCommand: "string",
    mainBranch: "string",
    period: 0
  };

  res.json({ settings });
});

router.post("/", async (req, res) => {
  // const { repoName, buildCommand, mainBranch, period } = req.body;

  const settings = {
    repoName: "string",
    buildCommand: "string",
    mainBranch: "string",
    period: 0
  };

  res.sendStatus(201);
});

module.exports = router;
