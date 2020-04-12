import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./Form.scss";

const propTypes = {
  children: PropTypes.node.isRequired,
  mix: PropTypes.arrayOf(PropTypes.string),
  handleSubmit: PropTypes.func.isRequired
};

const Form = ({ children, mix, handleSubmit }) => {
  const formStyles = cn("Form")(null, mix);
  return (
    <form className={formStyles} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

Form.propTypes = propTypes;

export default Form;
