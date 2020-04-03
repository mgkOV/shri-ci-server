import { call, put, takeLatest, all } from "redux-saga/effects";
import Api from "../../api";
import types from "./builds.types";

const api = new Api();

function* getAllBuilds() {
  try {
    const builds = yield call(api.getAllBuilds);

    yield put({ type: types.ALL_BUILDS_GET_SUCCEEDED, payload: builds });
  } catch (e) {
    yield put({ type: types.ALL_BUILDS_GET_FAILED, payload: e.message });
  }
}

function* getAllBuildsStart() {
  yield takeLatest(types.ALL_BUILDS_GET_REQUESTED, getAllBuilds);
}

export default function* buildssSagas() {
  yield all([call(getAllBuildsStart)]);
}
