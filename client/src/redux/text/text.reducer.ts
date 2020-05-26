import { Reducer } from "redux";
import types from "./text.types";

const INITIAL_STATE = { data: {}, isFetching: false };

const textReducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //GET
    case types.TEXT_GET_REQUESTED:
      return { ...state, isFetching: true };

    case types.TEXT_GET_SUCCEEDED:
      return { ...state, data: action.payload, isFetching: false };

    case types.TEXT_GET_FAILED:
      return { ...state, errorMessage: action.payload, isFetching: false };

    default:
      return state;
  }
};

export default textReducer;
