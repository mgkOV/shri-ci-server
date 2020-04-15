const createTestData = require('../tests/test-data');
let settings = createTestData().settings;

let shriApi = {
  async getConfig() {
    return settings;
  },

  async postConfig(newSettings) {
    if (process.env.NODE_ENV === 'stub') {
      settings = Object.assign({}, settings, newSettings);
      new Promise((resolve) => setTimeout(resolve, 1000));
    }

    return 200;
  },

  async deleteConfig() {
    if (process.env.NODE_ENV === 'stub') {
      settings = {};
    }
    return 200;
  },

  async getBuildList(offset = 0, limit = 25) {
    return { data: createTestData().buildList.data.slice(offset, limit) };
  },

  async getBuildDetails(buildId) {
    return {
      data: Object.assign({}, createTestData().build.data, { id: buildId }),
    };
  },

  async getBuildLog(buildId) {
    // let log = fetchLog(buildId);
    // if (log) return log;
    // log = await shriApi.getLogFromApi(buildId);
    // addLog({ buildId, log });
    // return log;
    return `Test ${buildId} log`;
  },

  async getLogFromApi(buildId) {
    return 'Test log';
  },

  async postBuildRequest(commitData) {
    // const response = await axios.post(`${URL}/build/request`, commitData, {
    //   headers: { Authorization: `Bearer ${JWT}` },
    //   httpsAgent: agent,
    // });
    // return response.status;
    return 200;
  },

  async postBuildStart(buildData) {
    // const response = await axios.post(`${URL}/build/start`, buildData, {
    //   headers: { Authorization: `Bearer ${JWT}` },
    //   httpsAgent: agent,
    // });
    // return response.status;
    return 200;
  },

  async postBuildFinish(buildData) {
    // const response = await axios.post(`${URL}/build/finish`, buildData, {
    //   headers: { Authorization: `Bearer ${JWT}` },
    //   httpsAgent: agent,
    // });
    // return response.status;
    return 200;
  },
};

module.exports = shriApi;
