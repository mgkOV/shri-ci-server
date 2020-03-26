import React from "react";
import PropTypes from "prop-types";

import "./SectionHeading-Subtitle.scss";

const propTypes = {
  children: PropTypes.string
};

const SectionHeadingSubtitle = ({ children }) => {
  return <div className="SectionHeading-Subtitle">{children}</div>;
};

SectionHeadingSubtitle.propTypes = propTypes;

export default SectionHeadingSubtitle;
