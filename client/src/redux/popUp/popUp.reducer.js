import types from "./popUp.types";

const INITIAL_STATE = {
  show: false
};

const popUpReducer = (state = INITIAL_STATE, action) => {
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
