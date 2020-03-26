import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./FieldSuite.scss";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  mix: PropTypes.arrayOf(PropTypes.string),
  hasHint: PropTypes.bool,
  required: PropTypes.bool
};

const FieldSuite = ({ children, mix, hasHint, required }) => {
  const fieldSuitStyles = cn("FieldSuite")({ hasHint, required }, mix);
  return <div className={fieldSuitStyles}>{children}</div>;
};

FieldSuite.propTypes = propTypes;

export default FieldSuite;
