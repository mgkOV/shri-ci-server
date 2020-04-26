import types, { BuildActionTypes } from "./builds.types";
import { History } from "history";

export const getBuildList = (offset: number): BuildActionTypes => {
  return {
    type: types.BUILD_LIST_GET_REQUESTED,
    payload: offset,
  };
};

export const getMoreBuilds = (offset: number): BuildActionTypes => {
  return {
    type: types.MORE_BUILDS_GET_REQUESTED,
    payload: offset,
  };
};

export const getCurrentBuild = (id: string): BuildActionTypes => {
  return {
    type: types.BUILD_GET_REQUESTED,
    payload: id,
  };
};

export const getBuildLog = (id: string): BuildActionTypes => {
  return {
    type: types.BUILD_LOG_GET_REQUESTED,
    payload: id,
  };
};

export const postBuild = (commitHash: string, history: History): BuildActionTypes => {
  return {
    type: types.BUILD_POST_REQUESTED,
    payload: commitHash,
    history,
  };
};

export const clearBuildList = (): BuildActionTypes => {
  return {
    type: types.CLEAR_BUILD_LIST,
  };
};

export const clearCurrentBuild = (): BuildActionTypes => {
  return {
    type: types.CLEAR_CURRENT_BUILD,
  };
};

export const clearBuildLog = (): BuildActionTypes => {
  return {
    type: types.CLEAR_BUILD_LOG,
  };
};
