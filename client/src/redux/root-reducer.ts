import { combineReducers } from "redux";

import popUpReducer from "./popUp/popUp.reducer";
import settingsReducer from "./settings/settings.reducer";
import buildReducer from "./builds/builds.reducer";

const rootReducer = combineReducers({
  settings: settingsReducer,
  builds: buildReducer,
  popUp: popUpReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
