import React from "react";
import PropTypes from "prop-types";

import "./FieldSuite-Hint.scss";

const propTypes = {
  children: PropTypes.string
};

const FieldSuiteHint = ({ children }) => {
  return <span className="FieldSuite-Hint">{children}</span>;
};

FieldSuiteHint.propTypes = propTypes;

export default FieldSuiteHint;
