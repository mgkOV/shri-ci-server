import types from "./text.types";

export const getText = () => {
  return {
    type: types.TEXT_GET_REQUESTED,
  };
};
