import { createSelector } from "reselect";

const selectPopUp = (state: any) => state.popUp;

export const selectIsPopUpShown = createSelector([selectPopUp], (popUp) => popUp.show);
