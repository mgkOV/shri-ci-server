import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./Button.scss";

const propTypes = {
  children: PropTypes.node.isRequired,
  tone: PropTypes.oneOf(["action", "control", "disabled"]),
  fullWidthAtSmallScreen: PropTypes.bool,
  type: PropTypes.oneOf(["text", "icon", "formControl", "iconText"])
};

const Button = ({ children, tone, type, fullWidthAtSmallScreen }) => {
  const buttonStyles = cn("Button")({ tone, type, fullWidthAtSmallScreen });

  return (
    <button type="button" className={buttonStyles}>
      {children}
    </button>
  );
};

Button.propTypes = propTypes;

export default Button;
