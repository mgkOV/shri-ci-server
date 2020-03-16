const axios = require("axios");
const config = require("config");
const https = require("https");

const buildRunner = require("./build-runner");

const JWT = config.get("jwt");
const URL = "https://hw.shri.yandex/api";

const agent = new https.Agent({
  rejectUnauthorized: false
});

module.exports = async () => {
  try {
    const STEP = 25;
    let offset = 0;
    let limit = STEP;

    while (true) {
      const response = await axios.get(`${URL}/build/list?offset=${offset}&limit=${limit}`, {
        headers: { Authorization: `Bearer ${JWT}` },
        httpsAgent: agent
      });

      offset += STEP;
      limit += STEP;

      const allBuilds = response.data.data;

      if (!allBuilds || allBuilds.length < 1) break;

      const waitingBuilds = allBuilds.filter(b => b.status === "Waiting");

      buildRunner.addBuilds(waitingBuilds);
    }
  } catch (error) {
    console.log(error);
  }
};
