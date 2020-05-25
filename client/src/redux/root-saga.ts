import { all, call } from "redux-saga/effects";

import settingsSagas from "./settings/settings.sagas";
import buildsSagas from "./builds/builds.sagas";
import textSagas from "./text/text.sagas";

export default function* rootSaga() {
  yield all([call(settingsSagas), call(buildsSagas), call(textSagas)]);
}
