const axios = require("axios");
const api = require("./api");

module.exports = async (agents) => {
  for await (let i of loadAgents(agents)) {
  }
};

async function* loadAgents(buildAgents, period = 7000) {
  while (true) {
    const waitingBuilds = await getWaitingBuilds();

    try {
      for (let prop in buildAgents) {
        if (!buildAgents[prop].build) {
          const build = waitingBuilds.pop();
          const agent = buildAgents[prop];

          agent.build = build;
          const status = await axios.post(`http://${agent.host}:${agent.port}/build`, build);
        }
      }

      await new Promise((resolve) => setTimeout(resolve, period));
    } catch (error) {
      console.log(error.message);
    }
  }
}

async function getWaitingBuilds() {
  try {
    const settings = await api.getConfig();
    if (!settings || !settings.data || !settings.data.id) return [];

    let builds = await api.getBuildList(0, 100);
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
    console.log(error.message);
    return [];
  }
}
