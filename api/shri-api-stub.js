const createTestData = require('../hermione/stub-data');
let settings = createTestData().settings;

let shriApi = {
  async getBuildLog(buildId) {
    // Хак для востановления настроек после теста
    if (buildId === '__restore-settings__') {
      settings = createTestData().settings;
    }

    return `Test ${buildId} log`;
  },

  async getConfig() {
    return settings;
  },

  async postConfig(newSettings) {
    settings = Object.assign({}, settings, newSettings);
    new Promise((resolve) => setTimeout(resolve, 1000));

    return 200;
  },

  async deleteConfig() {
    settings = {};

    return 200;
  },

  async getBuildList(offset = 0, limit = 9) {
    const data = createTestData().buildList.data;
    const end = Number(limit) + Number(offset);
    return {
      data: data.slice(offset, end),
    };
  },

  async getBuildDetails(buildId) {
    return {
      data: Object.assign({}, createTestData().build.data, { id: buildId }),
    };
  },

  async getLogFromApi(buildId) {
    return 'Test log';
  },

  async postBuildRequest(commitData) {
    return 200;
  },

  async postBuildStart(buildData) {
    return 200;
  },

  async postBuildFinish(buildData) {
    return 200;
  },
};

module.exports = shriApi;
