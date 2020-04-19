const api = require("./api");

module.exports = async (agents) => {
  const waitingBuilds = await getWaitingBuilds();

  console.log(waitingBuilds);

  setInterval(() => {
    console.log(agents);
  }, 10000);
};

async function getWaitingBuilds() {
  const settings = await api.getConfig();
  if (!settings || !settings.data || !settings.data.id) return {};

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
}
