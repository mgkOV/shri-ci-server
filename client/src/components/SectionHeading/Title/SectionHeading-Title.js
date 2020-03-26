import React from "react";
import PropTypes from "prop-types";

import "./SectionHeading-Title.scss";

const propTypes = {
  children: PropTypes.string
};

const SectionHeadingTitle = ({ children }) => {
  return <h2 className="SectionHeading-Title">{children}</h2>;
};

SectionHeadingTitle.propTypes = propTypes;

export default SectionHeadingTitle;
