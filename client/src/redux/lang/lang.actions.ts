import types from "./lang.types";

export const toggleLang = () => {
  return {
    type: types.TOGGLE_LANG,
  };
};
