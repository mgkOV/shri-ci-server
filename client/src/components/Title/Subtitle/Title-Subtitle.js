import React from "react";
import PropTypes from "prop-types";

import "./Title-Subtitle.scss";

const propTypes = {
  children: PropTypes.string
};

const TitleSubtitle = ({ children }) => {
  return <div className="Title-Subtitle">{children}</div>;
};

TitleSubtitle.propTypes = propTypes;

export default TitleSubtitle;
