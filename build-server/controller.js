const axios = require("axios");
const axiosRetry = require("axios-retry");
axiosRetry(axios, { retries: 4, retryDelay: axiosRetry.exponentialDelay });
const api = require("./api");

module.exports = async (agents) => {
  for await (let i of loadAgents(agents)) {
  }
};

async function* loadAgents(buildAgents, period = 30000) {
  while (true) {
    try {
      const waitingBuilds = await getWaitingBuilds();

      if (waitingBuilds.length > 0) {
        for (let prop in buildAgents) {
          if (!buildAgents[prop].build) {
            const build = waitingBuilds.pop();

            const agent = buildAgents[prop];

            agent.build = build;
            const status = await axios.post(`http://${agent.host}:${agent.port}/build`, { build });
            const startStatus = await api.postBuildStart({ start: new Date(), buildId: build.id });
          }
        }
      }

      await new Promise((resolve) => setTimeout(resolve, period));
    } catch (error) {
      console.log(error.message, error.config);
    }
  }
}

async function getWaitingBuilds() {
  try {
    const settings = await api.getConfig();
    if (!settings || !settings.data || !settings.data.id) return [];

    let builds = await api.getBuildList(0, 50);
    waitingBuilds = builds.data
      .filter(({ status }) => status === "Waiting")
      .map(({ id, commitHash }) => ({
        id,
        commitHash,
        repoName: settings.data.repoName,
        buildCommand: settings.data.buildCommand
      }));

    return waitingBuilds;
  } catch (error) {
    console.log(error.message, error.config);
    return [];
  }
}
