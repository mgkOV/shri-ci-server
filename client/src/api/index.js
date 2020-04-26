import axios from "axios";

export default class Api {
  getSettings = async () => {
    const settings = await axios.get("/api/settings");
    return settings.data;
  };

  postSettings = async (settings = {}) => {
    const savedSettings = await axios.post(
      "/api/settings",
      { ...settings },
      { timeout: 300000 }
    );
    return savedSettings.data;
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
}
