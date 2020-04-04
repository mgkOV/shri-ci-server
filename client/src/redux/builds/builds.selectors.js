import { createSelector } from "reselect";

const selectBuilds = (state) => state.builds;

export const selectAllBuilds = createSelector([selectBuilds], (builds) => builds.allBuilds);

export const selectIsCurrentBuildFetching = createSelector(
  [selectBuilds],
  (builds) => builds.isCurrentFetching
);