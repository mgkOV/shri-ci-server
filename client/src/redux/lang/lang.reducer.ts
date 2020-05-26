import { Reducer } from "redux";
import types from "./lang.types";

const INITIAL_STATE: string | null = null;

const langReducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TOGGLE_LANG:
      return state === "en" ? "ru" : "en";
    default:
      return state;
  }
};

export default langReducer;
