import { createSelector } from "reselect";
// import { RootState } from "../root-reducer";
// import { BuildState } from "./builds.types";

const selectBuilds = (state: any) => state.builds;

export const selectAllBuilds = createSelector(
  [selectBuilds],
  (builds) => builds.allBuilds
);

export const selectIsBuildListFetching = createSelector(
  [selectBuilds],
  (builds) => builds.isAllFetching
);

export const selectIsCurrentBuildFetching = createSelector(
  [selectBuilds],
  (builds) => builds.isCurrentFetching
);

export const selectCurrentBuild = createSelector(
  [selectBuilds],
  (builds) => builds.currentBuild
);

export const selectLog = createSelector([selectBuilds], (builds) => builds.buildLog);

export const selectIsLogFetching = createSelector(
  [selectBuilds],
  (builds) => builds.isLogFetching
);
