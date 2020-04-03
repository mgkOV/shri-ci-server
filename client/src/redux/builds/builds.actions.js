import types from "./builds.types";

export const getAllBuilds = () => ({
  type: types.ALL_BUILDS_GET_REQUESTED
});

export const getCurrentBuild = () => ({
  type: types.BUILD_GET_REQUESTED
});

export const getBuildLog = () => ({
  type: types.BUILD_LOG_GET_REQUESTED
});

export const postBuild = build => ({
  type: types.BUILD_POST_REQUESTED,
  payload: build
});
