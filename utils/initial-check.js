const shriApi = require("../api/shri-api");
const buildRunner = require("./build-runner");

module.exports = async () => {
  try {
    const STEP = 25;
    let offset = 0;
    let limit = STEP;

    while (true) {
      const settings = await shriApi.getConfig();

      if (!settings.data.id) break;

      const response = await shriApi.getBuildList(offset, limit);

      offset += STEP;
      limit += STEP;

      const allBuilds = response.data;

      if (!allBuilds || allBuilds.length < 1) break;

      const waitingBuilds = allBuilds.filter(
        ({ status }) => status === "Waiting" || status === "InProgress"
      );

      buildRunner.addBuilds(waitingBuilds);
    }
  } catch (error) {
    console.log(error);
  }
};
