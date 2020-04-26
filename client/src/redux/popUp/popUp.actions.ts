import types, { PopUpAction } from "./popUp.types";

export const openPopUp = (): PopUpAction => {
  return {
    type: types.OPEN_POPUP,
  };
};

export const closePopUp = (): PopUpAction => {
  return {
    type: types.CLOSE_POPUP,
  };
};
