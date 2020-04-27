import { call, put, takeLatest, all } from "redux-saga/effects";
import Api from "../../api";
import types from "./builds.types";
import { closePopUp } from "../popUp/popUp.actions";

const api = new Api();

// Get builds
function* getBuildList({ payload }: any) {
  try {
    const builds = yield call(api.getBuildList, payload);

    yield put({ type: types.BUILD_LIST_GET_SUCCEEDED, payload: builds });
  } catch (e) {
    yield put({ type: types.BUILD_LIST_GET_FAILED, payload: e.message });
  }
}

function* getBuildListStart() {
  yield takeLatest(types.BUILD_LIST_GET_REQUESTED, getBuildList);
}

// Get  more builds
function* getMoreBuilds({ payload }: any) {
  try {
    const builds = yield call(api.getBuildList, payload);

    yield put({ type: types.MORE_BUILDS_GET_SUCCEEDED, payload: builds });
  } catch (e) {
    yield put({ type: types.MORE_BUILDS_GET_FAILED, payload: e.message });
  }
}

function* getMoreBuildsStart() {
  yield takeLatest(types.MORE_BUILDS_GET_REQUESTED, getMoreBuilds);
}

//Post build
function* postBuild({ payload, history }: any) {
  try {
    const build = yield call(api.postBuild, payload);

    yield put({ type: types.BUILD_POST_SUCCEEDED, payload: build });
    history?.push(`/build/${build.id}`);
    yield put(closePopUp());
  } catch (e) {
    yield put({ type: types.BUILD_POST_FAILED, payload: e.message });
  }
}

function* postBuildStart() {
  yield takeLatest(types.BUILD_POST_REQUESTED, postBuild);
}

//GET build
function* getBuild({ payload }: any) {
  try {
    const build = yield call(api.getBuild, payload);
    yield put({ type: types.BUILD_GET_SUCCEEDED, payload: build });
  } catch (e) {
    yield put({ type: types.BUILD_GET_FAILED, payload: e.message });
  }
}

function* getBuildStart() {
  yield takeLatest(types.BUILD_GET_REQUESTED, getBuild);
}

//Get build log
function* getLog({ payload }: any) {
  try {
    const log = yield call(api.getBuildLog, payload);
    yield put({ type: types.BUILD_LOG_GET_SUCCEEDED, payload: log });
  } catch (e) {
    yield put({ type: types.BUILD_LOG_GET_FAILED, payload: e.message });
  }
}

function* getLogStart() {
  yield takeLatest(types.BUILD_LOG_GET_REQUESTED, getLog);
}

export default function* buildssSagas() {
  yield all([
    call(getBuildListStart),
    call(postBuildStart),
    call(getBuildStart),
    call(getLogStart),
    call(getMoreBuildsStart),
  ]);
}
