import React from "react";
import PropTypes from "prop-types";

import "./Form-Error.scss";

const propTypes = {
  children: PropTypes.string
};

const FormError = ({ children }) => {
  return <div className="Form-Error">{children}</div>;
};

FormError.propTypes = propTypes;

export default FormError;
