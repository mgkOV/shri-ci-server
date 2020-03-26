import React from "react";
import PropTypes from "prop-types";

import "./FieldSuite-Input.scss";

const propTypes = { placeholder: PropTypes.string, name: PropTypes.string };

const FieldSuiteInput = ({ placeholder = "", name }) => {
  return (
    <div className="FieldSuite-Input">
      <input type="text" id={name} name={name} placeholder={placeholder} />
    </div>
  );
};

FieldSuiteInput.propTypes = propTypes;

export default FieldSuiteInput;
