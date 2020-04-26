import types, { SettingsActionType } from "./settings.types";
import { History } from "history";

export const getSettings = (): SettingsActionType => {
  return {
    type: types.SETTING_GET_REQUESTED,
  };
};

export const postSettings = (
  settings: ConfigSchema,
  history: History
): SettingsActionType => {
  return {
    type: types.SETTING_POST_REQUESTED,
    payload: settings,
    history,
  };
};
