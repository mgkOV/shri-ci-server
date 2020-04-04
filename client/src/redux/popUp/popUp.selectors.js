import { createSelector } from "reselect";

const selectPopUp = (state) => state.popUp;

export const selectIsPopUpShown = createSelector([selectPopUp], (popUp) => popUp.show);
