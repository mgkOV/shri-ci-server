import types from "./settings.types";

const INITIAL_STATE = {
  settings: null,
  isFetching: false,
  errorMessage: undefined
};

const settingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SETTING_GET_STARTED:
      return { ...state, isFetching: true };

    case types.SETTING_GET_SUCCEEDED:
      return { ...state, settings: action.payload, isFetching: false };

    case types.SETTING_GET_FAILED:
      return { ...state, errorMessage: action.payload, isFetching: false };

    case types.SETTING_POST_SUCCEEDED:
      return state;

    default:
      return state;
  }
};

export default settingsReducer;
