import { combineReducers } from "redux";

import popUpReducer from "./popUp/popUp.reducer";

export default combineReducers({
  settings: () => ({}),
  builds: () => ({}),
  activeBuild: () => ({}),
  popUp: popUpReducer
});
