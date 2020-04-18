const agents = [];

module.exports = (app) => {
  app.post("/notify-agent", (req, res) => {
    const { host, port } = req.body;
    agent.push({ host, port, build: null });
    res.sendStatus(200);
  });

  app.use("/notify-build-result", (req, res) => {
    res.sendStatus(200);
  });
};
