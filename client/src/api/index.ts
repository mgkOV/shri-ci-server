import axios from "axios";

export default class Api {
  getText = async (lang: string) => {
    const settings = await axios.get(`/api/l10n/${lang}`);
    return settings.data;
  };

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

  getBuildList = async (offset = 0, lang: string) => {
    const builds = await axios.get(`/api/builds/?offset=${offset}&limit=9&lang=${lang}`);
    return builds.data;
  };

  getBuild = async (buildId: string, lang: string) => {
    const build = await axios.get(`/api/builds/${buildId}?lang=${lang}`);
    return build.data;
  };

  getBuildLog = async (buildId: string) => {
    const log = await axios.get(`/api/builds/${buildId}/logs`);
    return log.data;
  };

  postBuild = async (commitHash: string) => {
    const build = await axios.post(`/api/builds/${commitHash}`);
    return build.data;
  };
}
