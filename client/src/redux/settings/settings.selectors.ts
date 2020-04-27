import { createSelector } from "reselect";
// import { RootState } from "../root-reducer";
// import { SettingsState } from "./settings.types";

const selectSettings = (state: any) => state.settings;

export const selectSettingsData = createSelector(
  [selectSettings],
  (settings) => settings.data
);

export const selectIsSettingsFetching = createSelector(
  [selectSettings],
  (settings) => settings.isFetching
);

export const selectIsSettingsPosting = createSelector(
  [selectSettings],
  (settings) => settings.isPosting
);

export const selectPostSettingError = createSelector(
  [selectSettings],
  (settings) => settings.postErrorMessage
);
