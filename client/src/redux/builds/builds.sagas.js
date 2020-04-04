import { call, put, takeLatest, all } from "redux-saga/effects";
import Api from "../../api";
import types from "./builds.types";

const api = new Api();

// Get all builds
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

//Post build
function* postBuild({ payload, history }) {
  try {
    const build = yield call(api.postBuild, payload);

    yield put({ type: types.BUILD_POST_SUCCEEDED, payload: build });
    history.push(`/build/${build.id}`);
  } catch (e) {
    yield put({ type: types.BUILD_POST_FAILED, payload: e.message });
  }
}

function* postBuildStart() {
  yield takeLatest(types.BUILD_POST_REQUESTED, postBuild);
}

export default function* buildssSagas() {
  yield all([call(getAllBuildsStart), call(postBuildStart)]);
}
