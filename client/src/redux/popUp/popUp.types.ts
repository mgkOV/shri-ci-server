const actionTypes = {
  OPEN_POPUP: "OPEN_POPUP",
  CLOSE_POPUP: "CLOSE_POPUP",
};

export interface PopUpState {
  show: boolean;
}

interface OpenPopUpAction {
  type: typeof actionTypes.OPEN_POPUP;
}

interface ClosePopUpAction {
  type: typeof actionTypes.CLOSE_POPUP;
}

export type PopUpAction = OpenPopUpAction | ClosePopUpAction;

export default actionTypes;
