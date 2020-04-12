import React from "react";
import PropTypes from "prop-types";

import "./Button-Text.scss";

const propTypes = {
  children: PropTypes.string
};

const ButtonText = ({ children }) => {
  return <span className="Button-Text">{children}</span>;
};

ButtonText.propTypes = propTypes;

export default ButtonText;
