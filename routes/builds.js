const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ get: "/builds" });
});

router.post("/:commitHash", async (req, res) => {
  const { commitHash } = req.params;
  res.json({ post: `/builds/${commitHash}` });
});

router.get("/:buildId", async (req, res) => {
  const { buildId } = req.params;
  res.json({ get: `/builds/${buildId}` });
});

router.get("/:buildId/logs", async (req, res) => {
  const { buildId } = req.params;
  res.json({ get: `/builds/${buildId}/logs` });
});

module.exports = router;
