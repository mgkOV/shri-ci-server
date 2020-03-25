import React from "react";
import PropTypes from "prop-types";

import "./StartScreen-Title.scss";

const propTypes = {
  children: PropTypes.string
};

const StartScreenTitle = ({ children }) => {
  return <div className="StartScreen-Title">{children}</div>;
};

StartScreenTitle.propTypes = propTypes;

export default StartScreenTitle;
