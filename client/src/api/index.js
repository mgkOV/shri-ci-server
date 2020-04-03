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
}
