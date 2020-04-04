import React from "react";
import PropTypes from "prop-types";

import LogScreen from "../../LogScreen";

import { log } from "./log-seed";

const propTypes = {
  buildId: PropTypes.string,
  status: PropTypes.string
};

const BuildLogs = ({ buildId, status }) => {
  let buildLog = "In progress...";
  if (status !== "Waiting" && status !== "InProgress") {
    buildLog = log;
  }
  return <LogScreen log={buildLog} />;
};

BuildLogs.propTypes = propTypes;

export default BuildLogs;
