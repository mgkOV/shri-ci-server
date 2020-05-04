import types, { PopUpState, PopUpAction } from "./popUp.types";

const INITIAL_STATE: PopUpState = {
  show: false,
};

const popUpReducer = (state = INITIAL_STATE, action: PopUpAction): PopUpState => {
  switch (action.type) {
    case types.OPEN_POPUP:
      return { show: true };

    case types.CLOSE_POPUP:
      return { show: false };

    default:
      return state;
  }
};

export default popUpReducer;
