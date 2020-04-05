import React from "react";
import PropTypes from "prop-types";

import "./FieldSuite-ErrorMessage.scss";

const propTypes = {
  children: PropTypes.string
};

const FieldSuiteErrorMessage = ({ children }) => {
  return <div className="FieldSuite-ErrorMessage">{children}</div>;
};

FieldSuiteErrorMessage.propTypes = propTypes;

export default FieldSuiteErrorMessage;
