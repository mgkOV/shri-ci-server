import types from "./settings.types";

const INITIAL_STATE = {
  data: null,
  isFetching: false,
  errorMessage: undefined
};

const settingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SETTING_GET_REQUESTED:
      return { ...state, isFetching: true };

    case types.SETTING_GET_SUCCEEDED:
      return { ...state, data: action.payload, isFetching: false };

    case types.SETTING_GET_FAILED:
      return { ...state, errorMessage: action.payload, isFetching: false };

    case types.SETTING_POST_SUCCEEDED:
      return state;

    default:
      return state;
  }
};

export default settingsReducer;
