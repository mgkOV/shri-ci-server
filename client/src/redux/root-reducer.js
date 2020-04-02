import { combineReducers } from "redux";

import popUpReducer from "./popUp/popUp.reducer";
import settingsReducer from "./settings/settings.reducer";

export default combineReducers({
  settings: settingsReducer,
  builds: () => ({}),
  activeBuild: () => ({}),
  popUp: popUpReducer
});
