import { Reducer } from "redux";
import types, { SettingsState } from "./settings.types";

const INITIAL_STATE: SettingsState = {
  data: {},
  isFetching: false,
  errorMessage: undefined,
  postErrorMessage: undefined,
  isPosting: false,
};

const settingsReducer: Reducer<SettingsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //GET
    case types.SETTING_GET_REQUESTED:
      return { ...state, isFetching: true };

    case types.SETTING_GET_SUCCEEDED:
      return { ...state, data: action.payload, isFetching: false };

    case types.SETTING_GET_FAILED:
      return { ...state, errorMessage: action.payload, isFetching: false };

    // POST
    case types.SETTING_POST_REQUESTED:
      return { ...state, isPosting: true, postErrorMessage: undefined };

    case types.SETTING_POST_SUCCEEDED:
      return { ...state, data: action.payload, isPosting: false };

    case types.SETTING_POST_FAILED:
      return { ...state, postErrorMessage: action.payload, isPosting: false };

    default:
      return state;
  }
};

export default settingsReducer;
