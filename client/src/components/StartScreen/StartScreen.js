import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./StartScreen.scss";

const propTypes = {
  children: PropTypes.node.isRequired,
  mix: PropTypes.arrayOf(PropTypes.string)
};

const StartScreen = ({ children, mix }) => {
  const startScreenStyles = cn("StartScreen")(null, mix);
  return <div className={startScreenStyles}>{children}</div>;
};

StartScreen.propTypes = propTypes;

export default StartScreen;
