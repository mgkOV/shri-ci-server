const controller = require("./controller");

const buildAgents = {};
const api = require("./api");

controller(buildAgents);

module.exports = (app) => {
  app.post("/notify-agent", (req, res) => {
    const { port } = req.body;
    const host = req.hostname;

    buildAgents[`${host}:${port}`] = { host, port, build: null };

    res.sendStatus(200);
  });

  app.post("/notify-build-result", async (req, res) => {
    const { id, status, log, port, duration } = req.body;
    const host = req.hostname;

    const build = {
      buildId: id,
      duration,
      success: status === "Success",
      buildLog: log
    };

    buildAgents[`${host}:${port}`] = { host, port, build: null };

    const reqStatus = await api.postBuildFinish(build);

    res.sendStatus(200);
  });
};
