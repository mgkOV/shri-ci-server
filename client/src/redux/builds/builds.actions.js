import types from "./builds.types";

export const getBuildList = (offset) => ({
  type: types.BUILD_LIST_GET_REQUESTED,
  payload: offset
});

export const getCurrentBuild = () => ({
  type: types.BUILD_GET_REQUESTED
});

export const getBuildLog = () => ({
  type: types.BUILD_LOG_GET_REQUESTED
});

export const postBuild = (commitHash, history) => ({
  type: types.BUILD_POST_REQUESTED,
  payload: commitHash,
  history
});
