const axios = require('axios');
const config = require('config');
const https = require('https');
const stubApi = require('./shri-api-stub');
const testApi = require('./shri-api-test');

const { fetchLog, addLog, deleteOldCash } = require('../utils/caching');

const JWT = config.get('jwt');
const URL = 'https://hw.shri.yandex/api';

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const shriApi = {
  async getConfig() {
    const response = await axios.get(`${URL}/conf`, {
      headers: { Authorization: `Bearer ${JWT}` },
      httpsAgent: agent,
    });

    return response.data;
  },

  async postConfig(settings) {
    const response = await axios.post(`${URL}/conf`, settings, {
      headers: { Authorization: `Bearer ${JWT}` },
      httpsAgent: agent,
    });

    deleteOldCash();

    return response.status;
  },

  async deleteConfig() {
    const response = await axios.delete(`${URL}/conf`, {
      headers: { Authorization: `Bearer ${JWT}` },
      httpsAgent: agent,
    });

    deleteOldCash();

    return response.status;
  },

  async getBuildList(offset = 0, limit = 25) {
    const response = await axios.get(
      `${URL}/build/list?offset=${offset}&limit=${limit}`,
      {
        headers: { Authorization: `Bearer ${JWT}` },
        httpsAgent: agent,
      }
    );

    return response.data;
  },

  async getBuildDetails(buildId) {
    const response = await axios.get(
      `${URL}/build/details?buildId=${buildId}`,
      {
        headers: { Authorization: `Bearer ${JWT}` },
        httpsAgent: agent,
      }
    );

    return response.data;
  },

  async getBuildLog(buildId) {
    let log = fetchLog(buildId);

    if (log) return log;

    log = await shriApi.getLogFromApi(buildId);

    addLog({ buildId, log });

    return log;
  },

  async getLogFromApi(buildId) {
    const log = await axios.get(`${URL}/build/log?buildId=${buildId}`, {
      headers: { Authorization: `Bearer ${JWT}` },
      httpsAgent: agent,
    });

    return log.data;
  },

  async postBuildRequest(commitData) {
    const response = await axios.post(`${URL}/build/request`, commitData, {
      headers: { Authorization: `Bearer ${JWT}` },
      httpsAgent: agent,
    });

    return response.status;
  },

  async postBuildStart(buildData) {
    const response = await axios.post(`${URL}/build/start`, buildData, {
      headers: { Authorization: `Bearer ${JWT}` },
      httpsAgent: agent,
    });

    return response.status;
  },

  async postBuildFinish(buildData) {
    const response = await axios.post(`${URL}/build/finish`, buildData, {
      headers: { Authorization: `Bearer ${JWT}` },
      httpsAgent: agent,
    });

    return response.status;
  },
};

if (process.env.NODE_ENV === 'stub') {
  module.exports = stubApi;
} else if (process.env.NODE_ENV === 'test') {
  module.exports = testApi;
} else {
  module.exports = shriApi;
}
