import { History } from "history";

const settingTypes = {
  SETTING_GET_REQUESTED: "SETTING_GET_REQUESTED",
  SETTING_GET_SUCCEEDED: "SETTING_GET_SUCCEEDED",
  SETTING_GET_FAILED: "SETTING_GET_FAILED",

  SETTING_POST_REQUESTED: "SETTING_POST_REQUESTED",
  SETTING_POST_SUCCEEDED: "SETTING_POST_SUCCEEDED",
  SETTING_POST_FAILED: "SETTING_POST_FAILED",
};

export interface SettingsState {
  data: SettingsShriApi | {};
  isFetching: boolean;
  errorMessage: string | undefined;
  postErrorMessage: string | undefined;
  isPosting: boolean;
}

export type SettingsActionType = {
  type: string;
  payload?: ConfigSchema;
  history?: History;
};

export default settingTypes;
