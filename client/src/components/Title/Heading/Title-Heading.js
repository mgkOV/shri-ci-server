import React from "react";
import PropTypes from "prop-types";

import "./Title-Heading.scss";

const propTypes = {
  children: PropTypes.string
};

const TitleHeading = ({ children }) => {
  return <h2 className="Title-Heading">{children}</h2>;
};

TitleHeading.propTypes = propTypes;

export default TitleHeading;
