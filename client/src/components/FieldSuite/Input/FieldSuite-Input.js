import React from "react";
import PropTypes from "prop-types";

import "./FieldSuite-Input.scss";

const propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func.isRequired
};

const FieldSuiteInput = ({ placeholder = "", name, value, handleChange }) => {
  console.log(value);

  return (
    <div className="FieldSuite-Input">
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={e => handleChange(e.target.value)}
      />
      <div className="FieldSuite-Cleaner" onClick={e => handleChange("")}></div>
    </div>
  );
};

FieldSuiteInput.propTypes = propTypes;

export default FieldSuiteInput;
