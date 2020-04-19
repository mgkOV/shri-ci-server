const https = require("https");
const axios = require("axios");

const agent = new https.Agent({
  rejectUnauthorized: false
});

const api = {
  async getBuildList(offset = 0, limit = 25) {
    const response = await axios.get(`${URL}/build/list?offset=${offset}&limit=${limit}`, {
      headers: { Authorization: `Bearer ${JWT}` },
      httpsAgent: agent
    });

    return response.data;
  },

  async postBuildStart(buildData) {
    const response = await axios.post(`${URL}/build/start`, buildData, {
      headers: { Authorization: `Bearer ${JWT}` },
      httpsAgent: agent
    });

    return response.status;
  },

  async postBuildFinish(buildData) {
    const response = await axios.post(`${URL}/build/finish`, buildData, {
      headers: { Authorization: `Bearer ${JWT}` },
      httpsAgent: agent
    });

    return response.status;
  }
};

module.exports = api;
