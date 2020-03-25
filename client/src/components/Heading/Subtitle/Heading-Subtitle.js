import React from "react";
import PropTypes from "prop-types";

import "./Heading-Subtitle.scss";

const propTypes = {
  children: PropTypes.string
};

const HeadingSubtitle = ({ children }) => {
  return <div className="Heading-Subtitle">{children}</div>;
};

HeadingSubtitle.propTypes = propTypes;

export default HeadingSubtitle;
