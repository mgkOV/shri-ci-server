import { createSelector } from "reselect";

const selectBuilds = (state) => state.builds;

export const selectAllBuilds = createSelector([selectBuilds], (builds) => builds.allBuilds);

export const selectIsBuildListFetching = createSelector(
  [selectBuilds],
  (builds) => builds.isAllFetching
);

export const selectIsCurrentBuildFetching = createSelector(
  [selectBuilds],
  (builds) => builds.isCurrentFetching
);

export const selectCurrentBuild = createSelector([selectBuilds], (builds) => builds.currentBuild);

export const selectLog = createSelector([selectBuilds], (builds) => builds.buildLog);

export const selectIsLogFetching = createSelector([selectBuilds], (builds) => builds.isLogFetching);
