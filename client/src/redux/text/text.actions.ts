import types from "./text.types";

export const getText = (lang: string) => {
  return {
    type: types.TEXT_GET_REQUESTED,
    payload: lang,
  };
};
