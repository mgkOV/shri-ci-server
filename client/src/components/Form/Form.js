import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./Form.scss";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  mix: PropTypes.arrayOf(PropTypes.string)
};

const Form = ({ children, mix }) => {
  const formStyles = cn("Form")(null, mix);
  return <form className={formStyles}>{children}</form>;
};

Form.propTypes = propTypes;

export default Form;
