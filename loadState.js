import axios from "axios";
import settingsTypes from "./client/src/redux/settings/settings.types";
import buildsTypes from "./client/src/redux/builds/builds.types";

const loadSatate = async (url, store) => {
  const settingsData = await axios.get("http://localhost:5000/api/settings");
  const settings = settingsData.data;

  store.dispatch({
    type: settingsTypes.SETTING_GET_SUCCEEDED,
    payload: settings
  });

  if (url === "/" && settings.id) {
    const buildList = await axios.get("http://localhost:5000/api/builds/?offset=0&limit=9");

    store.dispatch({
      type: buildsTypes.BUILD_LIST_GET_SUCCEEDED,
      payload: buildList.data
    });
  }

  if (url.match(/^\/build\//)) {
    const build = await axios.get(`http://localhost:5000/api/builds/${url.substring(7)}`);
    const log = await axios.get(`http://localhost:5000/api/builds/${url.substring(7)}/logs`);

    store.dispatch({
      type: buildsTypes.BUILD_GET_SUCCEEDED,
      payload: build.data
    });

    store.dispatch({
      type: buildsTypes.BUILD_LOG_GET_SUCCEEDED,
      payload: log.data
    });
  }
};

export default loadSatate;
