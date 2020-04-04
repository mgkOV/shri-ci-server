import types from "./builds.types";

const INITIAL_STATE = {
  allBuilds: [],
  currentBuild: {},
  isAllFetching: false,
  isCurrentFetching: false,
  isLogFetching: false,
  errorMessage: undefined
};

const buildReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // GET build list
    case types.BUILD_LIST_GET_REQUESTED:
      return { ...state, isAllFetching: true };

    case types.BUILD_LIST_GET_SUCCEEDED:
      return { ...state, isAllFetching: false, allBuilds: [...state.allBuilds, ...action.payload] };

    case types.BUILD_LIST_GET_FAILED:
      return { ...state, isAllFetching: false, errorMessage: action.payload };

    // GET  build
    case types.BUILD_GET_REQUESTED:
      return { ...state, isCurrentFetching: true };

    case types.BUILD_GET_SUCCEEDED:
      return { ...state, isCurrentFetching: false, currentBuild: action.payload };

    case types.BUILD_GET_FAILED:
      return { ...state, isCurrentFetching: false, errorMessage: action.payload };

    // GET  build log
    case types.BUILD_LOG_GET_REQUESTED:
      return { ...state, isLogFetching: true };

    case types.BUILD_LOG_GET_SUCCEEDED:
      return { ...state, isLogFetching: false, currentBuild: action.payload };

    case types.BUILD_LOG_GET_FAILED:
      return { ...state, isLogFetching: false, errorMessage: action.payload };

    // POST  build
    case types.BUILD_POST_REQUESTED:
      return { ...state, isCurrentFetching: true };

    case types.BUILD_POST_SUCCEEDED:
      return { ...state, isCurrentFetching: false, currentBuild: action.payload };

    case types.BUILD_POST_FAILED:
      return { ...state, isCurrentFetching: false, errorMessage: action.payload };

    //Clear currnetBuild
    case types.CLEAR_CURRENT_BUILD:
      return { ...state, currentBuild: {} };

    default:
      return state;
  }
};

export default buildReducer;
