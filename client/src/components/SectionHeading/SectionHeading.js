import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./SectionHeading.scss";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  mix: PropTypes.arrayOf(PropTypes.string)
};

const SectionHeading = ({ children, mix }) => {
  const sectionHeadingStyles = cn("SectionHeading")(null, mix);

  return <div className={sectionHeadingStyles}>{children}</div>;
};

SectionHeading.propTypes = propTypes;

export default SectionHeading;
