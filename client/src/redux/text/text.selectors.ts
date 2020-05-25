import { createSelector } from "reselect";
// import { RootState } from "../root-reducer";
// import { SettingsState } from "./settings.types";

const selectText = (state: any) => state.text;

export const selectTextData = createSelector([selectText], (text) => text.data);
