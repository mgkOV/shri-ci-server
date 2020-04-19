const controller = require("./controller");
const { apiToken, apiBaseUrl } = require("./server-conf");
const buildAgents = {};
const api = require("./api");

controller(buildAgents);

module.exports = (app) => {
  app.post("/notify-agent", (req, res) => {
    const { host, port } = req.body;

    buildAgents[`${host}:${port}`] = { host, port, build: null };

    res.sendStatus(200);
  });

  app.post("/notify-build-result", async (req, res) => {
    const { id, status, log, port, host, duration } = req.body;

    const build = {
      buildId: id,
      duration,
      success: status === "Success",
      buildLog: log
    };

    buildAgents[`${host}:${port}`] = { host, port, build: null };

    const reqStatus = 200;
    // const reqStatus = await api.postBuildFinish(build);

    res.sendStatus(reqStatus);
  });
};
