import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./Status.scss";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  mix: PropTypes.arrayOf(PropTypes.string)
};

const Status = ({ children, mix }) => {
  const statusStyles = cn("Status")(null, mix);
  return <div className={statusStyles}>{children}</div>;
};

Status.propTypes = propTypes;

export default Status;
