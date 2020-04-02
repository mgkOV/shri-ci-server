import types from "./popUp.types";

export const openPopUp = () => ({
  type: types.OPEN_POPUP
});

export const closePopUp = () => ({
  type: types.CLOSE_POPUP
});
