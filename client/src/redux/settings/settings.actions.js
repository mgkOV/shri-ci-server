import types from "./settings.types";

export const getSettings = () => ({
  type: types.SETTING_GET_REQUESTED
});

export const postSettings = (settings, history) => ({
  type: types.SETTING_POST_REQUESTED,
  payload: settings,
  history
});
