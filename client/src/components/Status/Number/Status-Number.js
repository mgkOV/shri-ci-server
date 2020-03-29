import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./Status-Number.scss";

const propTypes = {
  children: PropTypes.string,
  view: PropTypes.oneOf(["error", "success", "warning"])
};

const StatusNumber = ({ children, view }) => {
  const statusNumberStyle = cn("Status", "Number")({ view });

  return <div className={statusNumberStyle}>{children}</div>;
};

StatusNumber.propTypes = propTypes;

export default StatusNumber;
