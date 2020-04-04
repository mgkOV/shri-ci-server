import axios from "axios";

import { log } from "./log-seed";

export default class Api {
  getSettings = async () => {
    const settings = await axios.get("/api/settings");
    return settings.data;
  };

  getBuildList = async (offset = 0) => {
    const builds = await axios.get(`/api/builds/?offset=${offset}&limit=9`);
    return builds.data;
  };

  getBuild = async (buildId) => {
    const build = await axios.get(`/api/builds/${buildId}`);
    return build.data;
  };

  getBuildLog = async (buildId) => {
    const log = await axios.get(`/api/builds/${buildId}/logs`);
    return log.data;
  };

  postBuild = async (commitHash) => {
    const build = await axios.post(`/api/builds/${commitHash}`);
    return build.data;
  };

  getLog = async (buildId) => {
    // эмулируем задержку
    await new Promise((resolve) => setTimeout(resolve, 500));

    // не забыть добавить .data
    return log;
  };
}
