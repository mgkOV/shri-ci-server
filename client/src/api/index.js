import axios from "axios";

export default class Api {
  getSettings = async () => {
    const settings = await axios.get("/api/settings");
    return settings;
  };
}
