import axios from "axios";

export default class Api {
  getSettings = async () => {
    const settings = await axios.get("/api/settings");
    return settings.data;
  };

  getAllBuilds = async () => {
    const builds = await axios.get("/api/builds");
    return builds.data;
  };

  getBuild = async (buildId) => {
    const build = await axios.get(`/api/builds/${buildId}`);
    return build.data;
  };

  getBuild = async (buildId) => {
    const log = await axios.get(`/api/builds/${buildId}/logs`);
    return log.data;
  };

  postBuild = async (commitHash) => {
    const build = await axios.post(`/api/builds/${commitHash}`);
    return build.data;
  };
}
