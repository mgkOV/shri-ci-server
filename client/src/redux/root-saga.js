import { all, call } from "redux-saga/effects";

import settingsSagas from "./settings/settings.sagas";

export default function* rootSaga() {
  yield all([call(settingsSagas)]);
}
