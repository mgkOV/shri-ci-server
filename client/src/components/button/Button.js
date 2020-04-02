import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./Button.scss";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  tone: PropTypes.oneOf(["action", "control", "disabled"]),
  fullWidthAtSmallScreen: PropTypes.bool,
  type: PropTypes.oneOf(["text", "icon", "formControl", "iconText"]),
  mix: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired
};

const Button = ({ children, tone, type, fullWidthAtSmallScreen, mix, onClick }) => {
  const buttonStyles = cn("Button")({ tone, type, fullWidthAtSmallScreen }, mix);

  return (
    <button type="button" className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = propTypes;

export default Button;
