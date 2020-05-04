const https = require("https");
const axios = require("axios");
const axiosRetry = require("axios-retry");
axiosRetry(axios, { retries: 4, retryDelay: axiosRetry.exponentialDelay });

const { apiToken, apiBaseUrl } = require("./server-conf");

const agent = new https.Agent({
  rejectUnauthorized: false
});

const options = {
  headers: { Authorization: `Bearer ${apiToken}` },
  httpsAgent: agent
};

const api = {
  async getConfig() {
    const response = await axios.get(`${apiBaseUrl}conf`, options);

    return response.data;
  },

  async getBuildList(offset = 0, limit = 25) {
    const response = await axios.get(
      `${apiBaseUrl}build/list?offset=${offset}&limit=${limit}`,
      options
    );

    return response.data;
  },

  async postBuildStart(buildData) {
    const response = await axios.post(`${apiBaseUrl}build/start`, buildData, options);

    return response.status;
  },

  async postBuildFinish(buildData) {
    const response = await axios.post(`${apiBaseUrl}build/finish`, buildData, options);

    return response.status;
  }
};

module.exports = api;
