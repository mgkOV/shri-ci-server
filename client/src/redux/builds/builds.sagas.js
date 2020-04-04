import { call, put, takeLatest, all } from "redux-saga/effects";
import Api from "../../api";
import types from "./builds.types";
import { closePopUp } from "../popUp/popUp.actions";

const api = new Api();

// Get all builds
function* getBuildList() {
  try {
    const builds = yield call(api.getBuildList);

    yield put({ type: types.BUILD_LIST_GET_SUCCEEDED, payload: builds });
  } catch (e) {
    yield put({ type: types.BUILD_LIST_GET_FAILED, payload: e.message });
  }
}

function* getBuildListStart() {
  yield takeLatest(types.BUILD_LIST_GET_REQUESTED, getBuildList);
}

//Post build
function* postBuild({ payload, history }) {
  try {
    const build = yield call(api.postBuild, payload);

    yield put({ type: types.BUILD_POST_SUCCEEDED, payload: build });
    history.push(`/build/${build.id}`);
    yield put(closePopUp());
  } catch (e) {
    yield put({ type: types.BUILD_POST_FAILED, payload: e.message });
  }
}

function* postBuildStart() {
  yield takeLatest(types.BUILD_POST_REQUESTED, postBuild);
}

export default function* buildssSagas() {
  yield all([call(getBuildListStart), call(postBuildStart)]);
}
