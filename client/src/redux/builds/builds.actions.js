import types from "./builds.types";

export const getBuildList = (offset) => ({
  type: types.BUILD_LIST_GET_REQUESTED,
  payload: offset
});

export const getCurrentBuild = (id) => ({
  type: types.BUILD_GET_REQUESTED,
  payload: id
});

export const getBuildLog = (id) => ({
  type: types.BUILD_LOG_GET_REQUESTED,
  payload: id
});

export const postBuild = (commitHash, history) => ({
  type: types.BUILD_POST_REQUESTED,
  payload: commitHash,
  history
});

export const clearBuildList = () => ({
  type: types.CLEAR_BUILD_LIST
});

export const clearCurrentBuild = () => ({
  type: types.CLEAR_CURRENT_BUILD
});

export const clearBuildLog = () => ({
  type: types.CLEAR_BUILD_LOG
});
