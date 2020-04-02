import { call, put, takeLatest, all } from "redux-saga/effects";
import Api from "../../api";
import types from "./settings.types";

const api = new Api();

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

export default function* settingsSagas() {
  yield all([call(getSettingsStart)]);
}
