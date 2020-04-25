import axios from "axios";
import config from "config";
import https from "https";

import { fetchLog, addLog, deleteOldCash } from "../utils/caching";

const JWT = config.get("jwt");
const URL = "https://hw.shri.yandex/api";

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

  async postConfig(settings: ConfigSchema) {
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

  async getBuildDetails(buildId: string) {
    const response = await axios.get(
      `${URL}/build/details?buildId=${buildId}`,
      {
        headers: { Authorization: `Bearer ${JWT}` },
        httpsAgent: agent,
      }
    );

    return response.data;
  },

  async getBuildLog(buildId: string) {
    let log = fetchLog(buildId);

    if (log) return log;

    let logRes = await shriApi.getLogFromApi(buildId);

    addLog({ buildId, log: logRes });

    return log;
  },

  async getLogFromApi(buildId: string) {
    const log = await axios.get(`${URL}/build/log?buildId=${buildId}`, {
      headers: { Authorization: `Bearer ${JWT}` },
      httpsAgent: agent,
    });

    return log.data;
  },

  async postBuildRequest(commitData: BuildReqestSchema) {
    const response = await axios.post(`${URL}/build/request`, commitData, {
      headers: { Authorization: `Bearer ${JWT}` },
      httpsAgent: agent,
    });

    return response.status;
  },

  async postBuildStart(buildData: BuildStartSchema) {
    const response = await axios.post(`${URL}/build/start`, buildData, {
      headers: { Authorization: `Bearer ${JWT}` },
      httpsAgent: agent,
    });

    return response.status;
  },

  async postBuildFinish(buildData: BuildFinishSchema) {
    const response = await axios.post(`${URL}/build/finish`, buildData, {
      headers: { Authorization: `Bearer ${JWT}` },
      httpsAgent: agent,
    });

    return response.status;
  },
};

export default shriApi;
