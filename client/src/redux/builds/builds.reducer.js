import types from "./builds.types";

const INITIAL_STATE = {
  allBuilds: [],
  currentBuild: {},
  isFetching: true,
  errorMessage: undefined
};

const buildReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // GET all builds
    case types.ALL_BUILDS_GET_REQUESTED:
      return { ...state, isFetching: true };

    case types.ALL_BUILDS_GET_SUCCEEDED:
      return { ...state, isFetching: false, allBuilds: action.payload };

    case types.ALL_BUILDS_GET_FAILED:
      return { ...state, isFetching: false, errorMessage: action.payload };

    // GET  build
    case types.BUILD_GET_REQUESTED:
      return { ...state, isFetching: true };

    case types.BUILD_GET_SUCCEEDED:
      return { ...state, isFetching: false, currentBuild: action.payload };

    case types.BUILD_GET_FAILED:
      return { ...state, isFetching: false, errorMessage: action.payload };

    // GET  build log
    case types.BUILD_LOG_GET_REQUESTED:
      return { ...state, isFetching: true };

    case types.BUILD_LOG_GET_SUCCEEDED:
      return { ...state, isFetching: false, currentBuild: action.payload };

    case types.BUILD_LOG_GET_FAILED:
      return { ...state, isFetching: false, errorMessage: action.payload };

    // POST  build
    case types.BUILD_POST_REQUESTED:
      return { ...state, isFetching: true };

    case types.BUILD_POST_SUCCEEDED:
      return { ...state, isFetching: false, currentBuild: action.payload };

    case types.BUILD_POST_FAILED:
      return { ...state, isFetching: false, errorMessage: action.payload };

    //Clear currnetBuild
    case types.CLEAR_CURRENT_BUILD:
      return { ...state, currentBuild: {} };

    default:
      return state;
  }
};

export default buildReducer;
