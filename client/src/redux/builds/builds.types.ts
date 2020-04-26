import { History } from "history";

const buildTypes = {
  BUILD_LIST_GET_REQUESTED: "BUILD_LIST_GET_REQUESTED",
  BUILD_LIST_GET_SUCCEEDED: "BUILD_LIST_GET_SUCCEEDED",
  BUILD_LIST_GET_FAILED: "BUILD_LIST_GET_FAILED",

  MORE_BUILDS_GET_REQUESTED: "MORE_BUILDS_GET_REQUESTED",
  MORE_BUILDS_GET_SUCCEEDED: "MORE_BUILDS_GET_SUCCEEDED",
  MORE_BUILDS_GET_FAILED: "MORE_BUILDS_GET_FAILED",

  BUILD_GET_REQUESTED: "BUILD_GET_REQUESTED",
  BUILD_GET_SUCCEEDED: "BUILD_GET_SUCCEEDED",
  BUILD_GET_FAILED: "BUILD_GET_FAILED",

  BUILD_LOG_GET_REQUESTED: "BUILD_LOG_GET_REQUESTED",
  BUILD_LOG_GET_SUCCEEDED: "BUILD_LOG_GET_SUCCEEDED",
  BUILD_LOG_GET_FAILED: "BUILD_LOG_GET_FAILED",

  BUILD_POST_REQUESTED: "BUILD_POST_REQUESTED",
  BUILD_POST_SUCCEEDED: "BUILD_POST_SUCCEEDED",
  BUILD_POST_FAILED: "BUILD_POST_FAILED",

  CLEAR_CURRENT_BUILD: "CLEAR_CURRENT_BUILD",
  CLEAR_BUILD_LIST: "CLEAR_BUILD_LIST",
  CLEAR_BUILD_LOG: "CLEAR_BUILD_LOG",
};

export interface BuildState {
  allBuilds: BuildShriApi[];
  currentBuild: BuildShriApi | {};
  buildLog: string;
  isAllFetching: boolean;
  isCurrentFetching: boolean;
  isLogFetching: boolean;
  errorMessage: string | undefined;
}

interface GetBuildListAction {
  type: typeof buildTypes.BUILD_LIST_GET_REQUESTED;
  payload: number;
}

interface GetMoreBuildsAction {
  type: typeof buildTypes.MORE_BUILDS_GET_REQUESTED;
  payload: number;
}

interface GetCurrentBuildAction {
  type: typeof buildTypes.BUILD_GET_REQUESTED;
  payload: string;
}

interface GetBuildLogAction {
  type: typeof buildTypes.BUILD_LOG_GET_REQUESTED;
  payload: string;
}

interface PostBuildAction {
  type: typeof buildTypes.BUILD_POST_REQUESTED;
  payload: string;
  history: History;
}

interface ClearBuildListAction {
  type: typeof buildTypes.CLEAR_BUILD_LIST;
}

interface ClearCurrentBuildAction {
  type: typeof buildTypes.CLEAR_CURRENT_BUILD;
}

interface ClearBuildLogAction {
  type: typeof buildTypes.CLEAR_BUILD_LOG;
}

export type BuildActionTypes =
  | GetBuildListAction
  | GetMoreBuildsAction
  | GetCurrentBuildAction
  | GetBuildLogAction
  | PostBuildAction
  | ClearBuildListAction
  | ClearCurrentBuildAction
  | ClearBuildLogAction;

export default buildTypes;
