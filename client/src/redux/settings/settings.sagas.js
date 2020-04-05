import { call, put, takeLatest, all } from "redux-saga/effects";
import Api from "../../api";
import types from "./settings.types";

const api = new Api();

// GET settings
function* getSettings() {
  try {
    const settings = yield call(api.getSettings);
    yield put({ type: types.SETTING_GET_SUCCEEDED, payload: settings });
  } catch (e) {
    yield put({ type: types.SETTING_GET_FAILED, payload: e.message });
  }
}

function* getSettingsStart() {
  yield takeLatest(types.SETTING_GET_REQUESTED, getSettings);
}

//POST settings
function* postSettings({ payload, history }) {
  try {
    const settings = yield call(api.postSettings, payload);
    yield put({ type: types.SETTING_POST_SUCCEEDED, payload: settings });
    history.push("/");
  } catch (e) {
    yield put({ type: types.SETTING_POST_FAILED, payload: e.message });
  }
}

function* postSettingsStart() {
  yield takeLatest(types.SETTING_POST_REQUESTED, postSettings);
}

export default function* settingsSagas() {
  yield all([call(getSettingsStart), call(postSettingsStart)]);
}
