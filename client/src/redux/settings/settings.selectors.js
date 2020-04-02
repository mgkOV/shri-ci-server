import { createSelector } from "reselect";

const selectSettings = state => state.settings;

export const selectSettingsData = createSelector([selectSettings], settings => settings.data);

export const selectIsSettingsFetching = createSelector(
  [selectSettings],
  settings => settings.isFetching
);
