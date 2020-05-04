import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import LogScreen from "../../LogScreen";
import { getBuildLog, clearBuildLog } from "../../../redux/builds/builds.actions";
import { selectLog, selectIsLogFetching } from "../../../redux/builds/builds.selectors";
import Loader from "../../Loader";
import Section from "../../Section";

type BuildLogs = React.FC<{
  buildId: string;
  status: string;
  getBuildLog(buildId: string): void;
  clearBuildLog(): void;
  log: string;
  isFetching: boolean;
}>;

const BuildLogs: BuildLogs = ({
  buildId,
  status,
  getBuildLog,
  clearBuildLog,
  log,
  isFetching,
}) => {
  useEffect(() => {
    getBuildLog(buildId);
    return clearBuildLog;
  }, [buildId, getBuildLog, clearBuildLog]);

  const inProgress = status === "Waiting" || status === "InProgress";

  let buildLog = "In progress...";
  if (!inProgress) {
    buildLog = log;
  }
  return isFetching && !inProgress ? (
    <Section>
      <Loader />
    </Section>
  ) : (
    <LogScreen log={buildLog} />
  );
};

const mapState = createStructuredSelector({
  log: selectLog,
  isFetching: selectIsLogFetching,
});

export default connect(mapState, { getBuildLog, clearBuildLog })(BuildLogs);
