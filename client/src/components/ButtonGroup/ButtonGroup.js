import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./ButtonGroup.scss";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  mix: PropTypes.arrayOf(PropTypes.string)
};

const ButtonGroup = ({ children, mix }) => {
  const buttonGroupStyles = cn("ButtonGroup")(null, mix);
  return <div className={buttonGroupStyles}>{children}</div>;
};

ButtonGroup.propTypes = propTypes;

export default ButtonGroup;
