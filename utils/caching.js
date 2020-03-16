const express = require("express");
const axios = require("axios");
const config = require("config");
const https = require("https");

const JWT = config.get("jwt");
const URL = "https://hw.shri.yandex/api";

const agent = new https.Agent({
  rejectUnauthorized: false
});

const cache = {
  data: {},

  add({ buildId, configurationId, log }) {
    this.data[buildId] = { buildId, configurationId, log, cacheDate: new Date() };
  },

  delete(buildId) {
    delete this.data[buildId];
  },

  async fetchData(buildId) {
    const build = await axios.get(`${URL}/build/details?buildId=${buildId}`, {
      headers: { Authorization: `Bearer ${JWT}` },
      httpsAgent: agent
    });

    const { configurationId } = build.data.data;

    if (this.data[buildId]) {
      if (configurationId === this.data[buildId].configurationId) {
        return this.data[buildId].log;
      }
    }

    const response = await axios.get(`${URL}/build/log?buildId=${buildId}`, {
      headers: { Authorization: `Bearer ${JWT}` },
      httpsAgent: agent
    });

    this.add({ buildId, log: response.data, configurationId });

    return response.data;
  }
};

module.exports = {
  fetchData: cache.fetchData.bind(cache)
};
