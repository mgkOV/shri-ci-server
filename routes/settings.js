const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ get: "/settings" });
});

router.post("/", async (req, res) => {
  res.json({ post: "/settings" });
});

module.exports = router;
