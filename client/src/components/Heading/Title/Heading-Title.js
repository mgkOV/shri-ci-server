import React from "react";
import PropTypes from "prop-types";

import "./Heading-Title.scss";

const propTypes = {
  children: PropTypes.string
};

const HeadingTitle = ({ children }) => {
  return <h2 className="Heading-Title">{children}</h2>;
};

HeadingTitle.propTypes = propTypes;

export default HeadingTitle;
