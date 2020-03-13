const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  const settings = {
    repoName: "string",
    buildCommand: "string",
    mainBranch: "string",
    period: "integer"
  };
  res.json({ settings });
});

router.post("/", async (req, res) => {
  const { repoName, buildCommand, mainBranch, period } = req.body;
  res.json({ post: { repoName, buildCommand, mainBranch, period } });
});

module.exports = router;
