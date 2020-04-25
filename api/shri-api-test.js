const createTestData = require("../tests/test-data");
let settings = createTestData().settings;

let shriApi = {
  async getConfig() {
    return settings;
  },

  async postConfig(newSettings) {
    return 200;
  },

  async deleteConfig() {
    return 200;
  },

  async getBuildList(offset = 0, limit = 25) {
    return { data: createTestData().buildList.data.slice(offset, limit) };
  },

  async getBuildDetails(buildId) {
    return {
      data: Object.assign({}, createTestData().build.data, { id: buildId })
    };
  },

  async getBuildLog(buildId) {
    return `Test ${buildId} log`;
  },

  async getLogFromApi(buildId) {
    return "Test log";
  },

  async postBuildRequest(commitData) {
    return 200;
  },

  async postBuildStart(buildData) {
    return 200;
  },

  async postBuildFinish(buildData) {
    return 200;
  }
};

module.exports = shriApi;
