const { fetchLog, addLog, deleteOldCash } = require('../utils/caching');

let shriApi = {
  async getConfig() {
    return {
      data: {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        repoName: 'string',
        buildCommand: 'string',
        mainBranch: 'string',
        period: 0,
      },
    };
  },

  async postConfig(settings) {
    return 200;
  },

  async deleteConfig() {
    return 200;
  },

  async getBuildList(offset = 0, limit = 25) {
    return {
      data: [
        {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          configurationId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          buildNumber: 0,
          commitMessage: 'string',
          commitHash: 'string',
          branchName: 'string',
          authorName: 'string',
          status: 'Waiting',
          start: '2020-04-13T19:32:02.668Z',
          duration: 0,
        },
        {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa9',
          configurationId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          buildNumber: 0,
          commitMessage: 'string',
          commitHash: 'string',
          branchName: 'string',
          authorName: 'string',
          status: 'Waiting',
          start: '2020-04-13T19:32:03.668Z',
          duration: 0,
        },
      ],
    };
  },

  async getBuildDetails(buildId) {
    return {
      data: {
        id: buildId,
        configurationId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        buildNumber: 0,
        commitMessage: 'string',
        commitHash: 'string',
        branchName: 'string',
        authorName: 'string',
        status: 'Waiting',
        start: '2020-04-13T19:34:20.763Z',
        duration: 0,
      },
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
