import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./LogScreen.scss";

const propTypes = {
  log: PropTypes.string,
  mix: PropTypes.arrayOf(PropTypes.string)
};

const LogScreen = ({ children, mix, log }) => {
  const logScreenStyles = cn("LogScreen")(null, mix);

  return <div className={logScreenStyles}>{log}</div>;
};

LogScreen.propTypes = propTypes;

export default LogScreen;
