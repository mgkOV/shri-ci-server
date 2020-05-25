import { call, put, takeLatest, all } from "redux-saga/effects";
import Api from "../../api";
import types from "./text.types";

const api = new Api();

// GET text
function* getText() {
  try {
    const text = yield call(api.getText);
    yield put({ type: types.TEXT_GET_SUCCEEDED, payload: text });
  } catch (e) {
    yield put({ type: types.TEXT_GET_FAILED, payload: e.message });
  }
}

function* getTextStart() {
  yield takeLatest(types.TEXT_GET_REQUESTED, getText);
}

export default function* textSagas() {
  yield all([call(getTextStart)]);
}
