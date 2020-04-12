import React from "react";
import PropTypes from "prop-types";

import "./FieldSuite-Label.scss";

const propTypes = {
  children: PropTypes.string,
  htmlFor: PropTypes.string
};

const FieldSuiteLabel = ({ children, htmlFor }) => {
  return (
    <label className="FieldSuite-Label" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

FieldSuiteLabel.propTypes = propTypes;

export default FieldSuiteLabel;
