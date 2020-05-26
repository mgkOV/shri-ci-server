import { Reducer } from "redux";

const INITIAL_STATE: string | null = null;

const langReducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default langReducer;
