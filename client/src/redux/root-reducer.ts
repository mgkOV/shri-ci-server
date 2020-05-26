import { combineReducers } from "redux";

import popUpReducer from "./popUp/popUp.reducer";
import settingsReducer from "./settings/settings.reducer";
import buildReducer from "./builds/builds.reducer";
import textReducer from "./text/text.reducer";
import langReducer from "./lang/lang.reducer";

const rootReducer = combineReducers({
  settings: settingsReducer,
  builds: buildReducer,
  popUp: popUpReducer,
  text: textReducer,
  lang: langReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
