import { combineReducers } from "redux";

import popUpReducer from "./popUp/popUp.reducer";
import settingsReducer from "./settings/settings.reducer";
import buildReducer from "./builds/builds.reducer";

export default combineReducers({
  settings: settingsReducer,
  builds: buildReducer,
  activeBuild: () => ({}),
  popUp: popUpReducer
});
