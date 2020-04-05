import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./FieldSuite.scss";

const propTypes = {
  children: PropTypes.node.isRequired,
  mix: PropTypes.arrayOf(PropTypes.string),
  hasHint: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.bool
};

const FieldSuite = ({ children, mix, hasHint, required, error }) => {
  const fieldSuitStyles = cn("FieldSuite")({ hasHint, required, error }, mix);
  return <div className={fieldSuitStyles}>{children}</div>;
};

FieldSuite.propTypes = propTypes;

export default FieldSuite;
